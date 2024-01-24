import express from 'express';
import data from '../data.js';
import compression from 'express-compression';  

const app = express();

// app.use(compression());
app.use(compression({brotli: {enabled: true, zlib:{}}}));

app.get('/gzip', (req, res) => {
  res.send(data);
});

export default app;
