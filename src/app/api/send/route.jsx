
import  EmailTemplate  from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) { // Add res as argument
  const body = req.json();
  const { name, email, message } = body;
  console.log(body);

  const { data, error } = await resend.emails.send({
    from: 'Elite info@eliteae.net',
    to: 'info@eliteae.net',
    subject: 'here is a message from elite site by mkp',
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return res.status(400).json(error); // Use res to send error response
  }

  res.status(200).json(data); // Use res to send success response
}

