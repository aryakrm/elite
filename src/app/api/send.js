
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const body = request.json();
    const { name, email, message } = body;

  const { data, error } = await resend.emails.send({
    from: 'Elite info@eliteae.net',
    to: 'info@eliteae.net',
    subject: '',
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
