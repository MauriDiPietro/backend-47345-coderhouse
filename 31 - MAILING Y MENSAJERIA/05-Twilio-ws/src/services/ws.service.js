import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

export const twilioClient = twilio(process.env.SID, process.env.TOKEN);

