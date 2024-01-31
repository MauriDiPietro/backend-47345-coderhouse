import express from 'express';

const app = express();

const PORT = 8080;


  app.get('/operacion-simple', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    res.json({ sum });
  });
  

  app.get('/operacion-compleja', (req, res) => {
    let sum = 0;
    for (let i = 0; i < 500000; i++) {
      sum += i;
    }
    res.json({ sum });
  });

  app.listen(PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${PORT}`
    )
  );


