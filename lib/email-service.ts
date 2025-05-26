import { BusinessType, ContactInfo, InsuranceQuestions, ServiceOption } from "@/app/pricing/page"
import nodemailer from "nodemailer"

type ContactData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  region: string
  message: string
  contactType: "message" | "call"
  preferredContact: "email" | "phone"
  consent: boolean
}

export type PricingData = {
  businessType: BusinessType;
  policyHolderCount?: InsuranceQuestions["policyHolderCount"];
  costPerPolicy?: InsuranceQuestions["costPerPolicy"];
  vehicleCount?: number;        // for fleet/owner-op
  requestCount?: number;        // for fleet/owner-op
  selectedServices: {
    title: ServiceOption["title"];
    basePrice: ServiceOption["basePrice"];
  }[];
  estimatedPrice: number | "Enterprise";
  contact: ContactInfo
};

// Configure nodemailer transporter with SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
})

// Send confirmation email to the user
export async function sendUserConfirmationEmail(data: ContactData): Promise<boolean> {
  try {
    const result = await transporter.sendMail({
      from: `"24Hr Truck Fix" <${process.env.FROM_EMAIL}`,
      to: data.email,
      subject: "Thank you for contacting 24Hr Truck Fix",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://24hrtruckfix.com/24HR-logo-1.png" alt="24Hr Truck Fix Logo" style="max-width: 200px;">
          </div>
          <h2 style="color: #f59e0b; text-align: center;">Thank You for Contacting Us!</h2>
          <p>Hello ${data.firstName} ${data.lastName},</p>
          <p>We have received your message and appreciate your interest in 24Hr Truck Fix.</p>
          <p>A representative will contact you shortly via your preferred method (${data.preferredContact === "email" ? "Email" : "Phone"}).</p>
          <p>If you have any urgent questions, please don't hesitate to call us at <a href="tel:+13022731234">+1 302 273-1234</a>.</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; text-align: center; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} 24Hr Truck Fix. All rights reserved.</p>
            <p>300 Delaware Ave, Suite 210 #382, Wilmington DE 19801</p>
          </div>
        </div>
      `,
    })

    console.log("User confirmation email sent:", result.messageId)
    return true
  } catch (error) {
    console.error("Failed to send user confirmation email:", error)
    return false
  }
}

// Send notification email to the service team
export async function sendServiceNotificationEmail(data: ContactData): Promise<boolean> {
  try {
    const result = await transporter.sendMail({
      from: `"Contact Form Submission" <${process.env.FROM_EMAIL}`,
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #f59e0b;">New Contact Form Submission</h2>
          <p>A new contact form has been submitted on the website. Details are below:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.city}${data.city && data.region ? ", " : ""}${data.region}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Type</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.contactType === "message" ? "Message" : "Call"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Contact Method</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.preferredContact === "email" ? "Email" : "Phone"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Consent to SMS</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${data.consent ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Submission Time</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px;"><strong>Action Required:</strong> Please follow up with this contact as soon as possible.</p>
        </div>
      `,
    })

    console.log("Service notification email sent:", result.messageId)
    return true
  } catch (error) {
    console.error("Failed to send service notification email:", error)
    return false
  }
}

// Send notification email to the service team
export async function sendPricingAdminEmail(data: PricingData) {
  try {
    // Build services breakdown rows
    const servicesRows = data.selectedServices
      .map(
        (s) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${s.title}</td>
          <td style="padding:8px;border-bottom:1px solid #ddd;">$${s.basePrice}</td>
        </tr>`
      )
      .join("");

    // Business‐specific details row
    let bizDetails = "";
    if (data.businessType === "insurance") {
      bizDetails = `
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Policy Holders</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${data.policyHolderCount}</td>
        </tr>
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Cost per Policy</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">$${data.costPerPolicy}</td>
        </tr>
      `;
    } else {
      bizDetails = `
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Vehicle Count</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${data.vehicleCount}</td>
        </tr>
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Monthly Requests</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${data.requestCount}</td>
        </tr>
      `;
    }

    // Compose the HTML
    const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:6px;">
      <div style="text-align:center;margin-bottom:20px;">
        <img src="https://24hrtruckfix.com/24HR-logo-1.png" alt="24Hr Truck Fix" style="max-width:150px;" />
      </div>
      <h2 style="color:#1e3a8a;text-align:center;">New Pricing Request Submitted</h2>
      <p>Dear Sales Team,</p>
      <p>A new pricing estimate request has been submitted. Below are the details:</p>
      <table style="width:100%;border-collapse:collapse;margin-top:20px;">
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Business Type</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${data.businessType}</td>
        </tr>
        ${bizDetails}
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Estimated Price</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${
            data.estimatedPrice === "Enterprise"
              ? "Enterprise Plan"
              : `$${data.estimatedPrice}/month`
          }</td>
        </tr>
        <tr>
          <th align="left" style="padding:8px;">Selected Services</th>
          <td style="padding:8px;">
            <table style="width:100%;border-collapse:collapse;">
              ${servicesRows}
            </table>
          </td>
        </tr>
      </table>
      <h3 style="margin-top:30px;">Contact Information</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Name</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">
            ${data.contact.firstName} ${data.contact.lastName}
          </td>
        </tr>
        <tr>
          <th align="left" style="padding:8px;border-bottom:1px solid #ddd;">Email</th>
          <td style="padding:8px;border-bottom:1px solid #ddd;">${data.contact.email}</td>
        </tr>
        <tr>
          <th align="left" style="padding:8px;">Phone</th>
          <td style="padding:8px;">${data.contact.phone}</td>
        </tr>
      </table>
      <p style="margin-top:20px;">Please review and reach out to the client promptly.</p>
      <div style="margin-top:40px;border-top:1px solid #eee;padding-top:10px;text-align:center;color:#888;font-size:12px;">
        © ${new Date().getFullYear()} 24Hr Truck Fix. All rights reserved.
      </div>
    </div>
    `;

    // send a single email
    const result = await transporter.sendMail({
      from: `"Pricing Form Submission" <${process.env.FROM_EMAIL}`,
      to: process.env.TO_EMAIL,
      subject: "New Pricing Request",
      html,
    });

    console.log("Pricing notification email sent:", result.messageId)
    return true
  } catch (error) {
    console.error("Failed to send pricing notification email:", error)
    return false   
  }
}