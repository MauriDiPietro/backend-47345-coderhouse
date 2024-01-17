import { createTransport } from "nodemailer";
import "dotenv/config";

export const transporter = createTransport({
  host: process.env.HOST,
  port: process.env.PORT_ETHEREAL,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Bienvenida',
    text: 'Bienvenido/a a Coderhouse!'
};

