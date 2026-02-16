import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  // Configura el transporter con tu cuenta Gmail y app password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: correo,
      to: 'mavart08@gmail.com',
      subject: `Nuevo mensaje de ${nombre}`,
      text: mensaje,
      html: `<p><strong>De:</strong> ${nombre} (${correo})</p><p>${mensaje}</p>`,
    });
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error enviando el correo' });
  }
}
