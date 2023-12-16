import express from "express";
import apiRoutes from "./routes/index.routes.js"
import viewRoutes from "./routes/views.routes.js"

const app = express();

const PORT = 8080;
// Rutas para la api 
app.use("/api", apiRoutes);
// Rutas exclusivas para las vistas
app.use("/", viewRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
})