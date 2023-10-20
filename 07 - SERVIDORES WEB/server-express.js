import express from "express";
import { products } from "./products.js";

const app = express();

const user = "admin";

app.get("/", (req, res) => {
  res.send("mi primer servidor con express");
});

app.get("/home", (req, res) => {
  res.send("bienvenido/a");
});

app.get("/all-products", (req, res) => {
  // res.send(products)
  // res.json({ products })
  // res.redirect('/login')
  // res.render('products')
  if (user !== "admin") res.status(404).send("Error, no podes ingresar");
  else res.status(200).send(products);
});

app.get("/products", (req, res) => {
  console.log(req.query);
  const { value } = req.query; //string
  const productsFilter = products.filter((p) => p.price >= parseInt(value));
  res.json(productsFilter);

  //PRECIO MAYOR O IGUAL A : _value_ |BUSCAR| --> GET localhost:8080/products?value=${value}
});

app.get("/products/:id", (req, res) => {
  // console.log(req.params.id)
//   const id = req.params.id;
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) res.status(404).json({ message: "Producto no encontrado" });
  else res.status(200).json(product);
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));
