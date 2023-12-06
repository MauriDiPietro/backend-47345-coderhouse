import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import userRouter from './routes/user.router.js';
import viewsRouter from './routes/views.router.js';
import './config/dbConnection.js';
import { connectionString } from './config/dbConnection.js';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js';

const mongoStoreOptions = {
    store: MongoStore.create({
        mongoUrl: connectionString,
        crypto: {
            secret: '1234'
        }
    }),
    secret: '1234',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')

app.use(cookieParser());
app.use(session(mongoStoreOptions));

app.use('/users', userRouter);
app.use('/', viewsRouter);

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});