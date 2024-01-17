import express from "express";
import smsRouter from "./routes/sms.router.js";

const app = express();

app.use(express.json());

app.use("/api", smsRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server ok en puerto ${PORT}`);
});
