import mongoose from 'mongoose'

try {
  await mongoose.connect(
    'mongodb://127.0.0.1:27017/coder47345'
  )

  console.log('Conectado a la base de datos')
} catch (error) {
  console.log(error)
}
