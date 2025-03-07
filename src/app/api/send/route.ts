import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Tutoring Portfolio <onboarding@resend.dev>',
      to: ['drhowardthecoder@gmail.com'],
      subject: 'New tutoring enquiry',
      react: EmailTemplate({ name: "John", email: "John@test.com", message: "Test message" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
