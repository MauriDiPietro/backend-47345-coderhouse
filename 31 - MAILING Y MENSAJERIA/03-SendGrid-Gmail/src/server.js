import express from 'express';
import emailRouter from './routes/email.router.js'; 

const app = express();

app.use(express.json());

app.use('/api', emailRouter);      

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server ok en puerto ${PORT}`)
});