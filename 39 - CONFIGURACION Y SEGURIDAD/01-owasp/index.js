import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get('/', (req, res) => res.send('Welcome'));

app.listen(8080, () => {
 console.log(`Server is running on port 8080`);
});