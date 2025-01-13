import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Extract data from the request body
    const { name, email, contact, message } = body;

    // Validate required fields
    if (!name || !email || !contact || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP server
      port: 587, // Secure port for STARTTLS
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER, // Your Gmail email address
        pass: process.env.SMTP_PASS, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"H & E Computers Contact Form" <${process.env.SMTP_USER}>`, // Sender email
      to: process.env.SMTP_USER, // Your Gmail email (receiver)
      subject: `New Message from ${name}`,
      text: `You have received a new message from your website:\n\n
        - Name: ${name}
        - Email: ${email}
        - Contact: ${contact}
        - Message: ${message}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
