import { twilioClient } from "../services/sms.service.js";
import "dotenv/config";

export const sendSms = async (req, res) => {
  try {
    const { message } = req.body;
    const { dest } = req.body;
    const msg = {
      body: message,
      from: process.env.SMS,
      to: dest,
    };

    const response = await twilioClient.messages.create(msg);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
