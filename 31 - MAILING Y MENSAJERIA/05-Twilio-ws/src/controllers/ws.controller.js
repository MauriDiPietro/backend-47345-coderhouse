import { twilioClient } from "../services/ws.service.js";
import 'dotenv/config'

export const sendWS = async(req,res)=>{
    try {
        const msg = {
            body: req.body.message,
            from: process.env.CEL,
            to: req.body.dest,
            mediaUrl: ['https://cadenaser.com/resizer/c09Az9WzwQFwSZPN90pP1dhNqQ8=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/TOLWBLP2DRFWZPVWKRWIQ4WH3I.jpg']
        }
        const response = await twilioClient.messages.create(msg)
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}