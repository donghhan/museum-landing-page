import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactInputType } from "@/type";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, category, description } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Help Center <museum-landing-page-beige.vercel.app/>",
      to: [email as string],
      subject: `New ${category} email from ${email}`,
      text: description,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
