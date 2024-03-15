import express from "express";
import cors from "cors";
import "dotenv/config";
import PaymentService from "./payment.service.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP }));

const products = [
  { id: 1, name: "papas", price: 1000 },
  { id: 2, name: "queso", price: 500 },
  { id: 3, name: "hamburguesa", price: 1500 },
  { id: 4, name: "soda", price: 1000 },
  { id: 5, name: "golosinas", price: 800 },
];

app.post("/api/payments/payment-intents", async (req, res) => {
  const { id } = req.query;
  const product = products.find((p) => p.id === Number(id));
  if (!product) res.status(404).json({ msg: "Product not found" });
  const paymentIntentInfo = {
    amount: product.price,
    currency: "usd",
    metadata: {
      userId: "userid_mongo",
      orderDetails: JSON.stringify({
        [product.name]: 2,
      }),
    },
  };
  const service = new PaymentService();
  const result = await service.createPaymentIntent(paymentIntentInfo);
  console.log(result);
  res.json({
    payload: result,
  });
});

app.listen((8080), ()=>console.log('server ok'))