import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import viewRouter from './routes/views.router.js'
import userRouter from './routes/user.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', viewRouter);
app.use('/users', userRouter);

app.listen(8080, () => console.log("server ok on port 8080"));
