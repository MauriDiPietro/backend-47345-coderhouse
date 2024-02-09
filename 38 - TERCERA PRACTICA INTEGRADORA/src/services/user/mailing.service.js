import { createTransport } from "nodemailer";
import config from "../../config/config.js";

const transporter = createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: config.EMAIL,
    pass: config.PASSWORD,
  },
});

const createMsgRegister = (first_name) =>
  `<h1>Hola ${first_name}, ¡Bienvenido/a a Coderhouse!</h1>`;

const createMsgResetPass = (first_name) => {
  return `<p>¡Hola ${first_name}!
            Hace click 
            <a href='http://localhost:8080/new-pass'>AQUÍ</a>
            para restablecer tu contraseña.
    </p>`;
  // nueva contraseña: ________  |_RESTABLECER CONTRASEÑA_| ---> POST http://localhost:8080/reset-pass
};

export const sendMail = async (user, service, token = null) => {
  try {
    const { first_name, email } = user;

    let msg = "";

    service === "register"
      ? (msg = createMsgRegister(first_name))
      : service === "resetPass"
      ? (msg = createMsgResetPass(first_name))
      : (msg = "");

    let subj = "";

    subj =
      service === "register"
        ? "Bienvenido/a"
        : service === "resetPass"
        ? "Recuperación de contraseña"
        : "";

    const gmailOptions = {
      from: config.EMAIL,
      to: email,
      subject: subj,
      html: msg,
    };

    const response = await transporter.sendMail(gmailOptions);
    if (token !== null) return token;
    console.log("email enviado", response);
  } catch (error) {
    throw new Error(error.message);
  }
};
