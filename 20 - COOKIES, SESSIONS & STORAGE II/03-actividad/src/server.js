import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from './utils.js';
import MongoStore from "connect-mongo";
import userRouter from "./routes/user.router.js";
import viewsRouter from './routes/views.router.js'
import "./db/connection.js";
import { connectionString } from "./db/connection.js";
import handlebars from 'express-handlebars';

const app = express();

const mongoStoreOptions = {
  store: MongoStore.create({
    mongoUrl: connectionString,
    ttl: 120,
    crypto: {
      secret: '1234'
    }
  }),
  secret: "1234",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 120000,
  },
};

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.engine('handlebars', handlebars.engine()); 
app.set('view engine', 'handlebars');  
app.set('views', __dirname+'/views');  

app.use(session(mongoStoreOptions));

app.use("/users", userRouter);
app.use('/views', viewsRouter)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`);
});

export default app;
