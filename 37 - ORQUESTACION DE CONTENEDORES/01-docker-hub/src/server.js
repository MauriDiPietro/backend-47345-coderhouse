import express from "express";
import userRoute from "./routers/user.router.js";
import { dbConnection } from "./config/db.connection.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

const PORT = 8080;

dbConnection().then(() => console.log('Connect to MongoDB'));

const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
