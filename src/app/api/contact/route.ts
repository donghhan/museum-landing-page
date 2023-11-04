import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { ContactInputType } from "@/type";

export async function POST(req: NextRequest) {
  const { email, category, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER as string,
      pass: process.env.GMAIL_PASSWORD as string,
    },
  });

  const mailOptions: Mail.Options = {
    from: "Museum Help Center <museum-landing-page-beige@vercel.app>",
    to: email as string,
    subject: `Message from ${email} with ${category}`,
    text: description,
  };

  const sendMailPromise = async () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error: any) => {
        if (!error) {
          resolve("Email sent");
        } else {
          reject(error.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
