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

// Configure nodemailer transporter with SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "notifications@24hrtruckfix.com",
    pass: "dAn@24hrtruck",
  },
})

// Send confirmation email to the user
export async function sendUserConfirmationEmail(data: ContactData): Promise<boolean> {
  try {
    const result = await transporter.sendMail({
      from: '"24Hr Truck Fix" <notifications@24hrtruckfix.com>',
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
      from: '"Contact Form Submission" <notifications@24hrtruckfix.com>',
      to: "Service@24hrtruckfix.com",
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
