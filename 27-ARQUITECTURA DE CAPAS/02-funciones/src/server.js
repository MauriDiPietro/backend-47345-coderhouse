import express from 'express'
import apiRoutes from './routes/routes.products.js'

const app = express()

app.use(express.json());
app.use('/api', apiRoutes)

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

