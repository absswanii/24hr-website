"use server"

import { z } from "zod"
import { sendUserConfirmationEmail, sendServiceNotificationEmail } from "@/lib/email-service"

// Define the form schema for validation
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().optional(),
  region: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  contactType: z.enum(["message", "call"]),
  preferredContact: z.enum(["email", "phone"]),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to receive messages",
  }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData | any) {
  try {
    // Extract form data, handling both FormData objects and plain objects
    let data: any = {}

    // Check if formData is a FormData object
    if (formData instanceof FormData) {
      data = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        city: (formData.get("city") as string) || "",
        region: (formData.get("region") as string) || "",
        message: formData.get("message") as string,
        contactType: formData.get("contactType") as "message" | "call",
        preferredContact: formData.get("preferredContact") as "email" | "phone",
        consent: formData.get("consent") === "on",
      }
    } else {
      // Handle case where formData is already an object
      data = {
        firstName: formData.firstName || "",
        lastName: formData.lastName || "",
        email: formData.email || "",
        phone: formData.phone || "",
        city: formData.city || "",
        region: formData.region || "",
        message: formData.message || "",
        contactType: formData.contactType || "message",
        preferredContact: formData.preferredContact || "email",
        consent: formData.consent === true || formData.consent === "on",
      }
    }

    // Validate the form data
    const validationResult = contactFormSchema.safeParse(data)

    if (!validationResult.success) {
      console.error("Validation errors:", validationResult.error.flatten().fieldErrors)
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validData = validationResult.data

    // Send confirmation email to the user
    const userEmailSent = await sendUserConfirmationEmail(validData)

    // Send notification email to the service team
    const serviceEmailSent = await sendServiceNotificationEmail(validData)

    // Check if both emails were sent successfully
    if (!userEmailSent || !serviceEmailSent) {
      console.warn("One or more emails failed to send")
      return {
        success: false,
        message: "There was an issue sending confirmation emails. Our team has been notified. Please try again later.",
      }
    }

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you shortly.",
    }
  } catch (error) {
    console.error("Error processing form:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again.",
    }
  }
}
