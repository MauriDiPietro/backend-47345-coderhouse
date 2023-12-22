import express from 'express';
import './database.js';
import config from './config.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = config.PORT

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT} in ${config.NODE_ENV} mode`);
});

