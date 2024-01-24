import express from 'express';
import { errorHandler } from './errorHandler.js';

const app = express();

app.use(express.json());

app.get('/products', (req, res, next)=>{
    try {
        throw new Error('ERROR PRODUCTS')
        data = [];
        // if(data.length === 0) res.send('no data')
        // else res.send(data)
    } catch (error) {
        next(error.message)
    }
})

app.use(errorHandler)

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});