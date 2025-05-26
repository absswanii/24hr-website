"use server";
import { z } from "zod";
import { sendPricingAdminEmail, PricingData } from "@/lib/email-service";
import { pricingFormSchema } from "@/lib/pricing";

export async function submitPricingForm(formData: FormData | any) {
  // 2a) Normalize incoming FormData into a plain object
  const dataObj: Record<string, any> =
    formData instanceof FormData
      ? {
          businessType: formData.get("businessType"),
          policyHolderCount: formData.get("policyHolderCount"),
          costPerPolicy: formData.get("costPerPolicy"),
          vehicleCount: formData.get("vehicleCount"),
          requestCount: formData.get("requestCount"),
          selectedServices: JSON.parse(
            formData.get("selectedServices") as string
          ),
          estimatedPrice: (() => {
            const v = formData.get("estimatedPrice");
            return v === "Enterprise" ? "Enterprise" : Number(v);
          })(),
          contact: {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
          },
        }
      : formData;

      const result = await pricingFormSchema.safeParseAsync(dataObj);
    //   console.log(result, dataObj, formData)
  if (!result.success) {
    console.error("Pricing form validation errors:", result.error.flatten());
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const validData = result.data as PricingData;
  try {
    await sendPricingAdminEmail(validData);
    return {
      success: true,
      message: "Your pricing request has been submitted successfully.",
    };
  } catch (err: any) {
    console.error("Error sending pricing email:", err);
    return {
      success: false,
      message:
        "There was an error processing your request. Please try again later.",
    };
  }
}
