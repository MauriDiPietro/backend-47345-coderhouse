import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";
import 'dotenv/config'

const client = new MercadoPagoConfig({
  accessToken:
    process.env.ACCESS_TOKEN_MP,
});

const preference = new Preference(client);

const app = express();

app.use(express.json());
app.use(cors());

app.post("/create-preference", async (req, res) => {
  try {
    const { quantity, price, title } = req.body;
    // console.log(quantity, price);
    const body = {
      //   body: {
      items: [
        {
          title: title,
          quantity: Number(quantity),
          unit_price: Number(price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "http://localhost:3000",
        failure: "http://localhost:8080/failure",
        pending: "http://localhost:8080/failure",
      },
      auto_return: "approved",
    };
    const response = await preference.create({ body });
    res.json({ id: response.id });
  } catch (error) {
    console.log(error);
  }
});
app.listen(8080, () => console.log("server ok en puerto 8080"));
