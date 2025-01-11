import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  // Extract data from the request body
  const { name, email, message } = body;

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can replace this with another provider if needed
    auth: {
      user: process.env.SMTP_USER, // Your Gmail or SMTP email address
      pass: process.env.SMTP_PASS, // App password or SMTP password
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`, // Sender email
    to: "your-email@example.com", // Replace with your business email
    subject: `New Message from ${name}`,
    text: `
      You have received a new message from your website:
      - Name: ${name}
      - Email: ${email}
      - Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
