import "dotenv/config";
import sgMail from "../services/email.service.js";

export const sendGmail = async (req, res) => {
  try {
    const { dest, name } = req.body;
    const gmailOptions = {
      from: process.env.EMAIL,
      to: dest,
      subject: "Bienvenida/o",
      html: `<h1>Hola ${name}, ¡Bienvenido a Coderhouse!</h1>`,
    //   /* ------------------------------------ - ----------------------------------- */
    //   mail_settings: {
    //     sandbox_mode: {
    //         enable: true
    //     }
    //   }  
      /* ------------------------------------ - ----------------------------------- */
    };
    const response = await sgMail.send(gmailOptions);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
