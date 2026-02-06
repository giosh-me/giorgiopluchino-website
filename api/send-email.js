import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, topic, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Giorgio Pluchino Website <website@giorgiopluchino.it>',
            to: ['pluchino.gio@gmail.com'],
            subject: `Nuova richiesta di consulenza: ${topic}`,
            reply_to: email,
            html: `
        <h2>Nuova richiesta ricevuta dal sito</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Argomento:</strong> ${topic}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
