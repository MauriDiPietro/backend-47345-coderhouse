import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import { __dirname } from "./utils.js";

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get('/', (req, res)=>{
    res.render('websocket')
});

app.post('/', (req, res)=>{
    const { msg } = req.body;
    socketServer.emit('message', msg);
    res.send('se envió el mensaje al socket del cliente')
});

const httpServer = app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});

const socketServer = new Server(httpServer);

const products = [];

socketServer.on('connection', (socket)=>{
    console.log(`Usuario conectado ${socket.id}`);
    socket.on('disconnect', ()=> console.log('usuario desconectado'))

    socket.emit('saludoDesdeBack', 'Bienvenido a websocket')

    socket.on('respuestaDesdeFront', (msg)=> console.log(msg))

    socket.on('newProduct', (product)=>{
        products.push(product)
        socketServer.emit('arrayProducts', products)
    })
})
