import mongoose from 'mongoose'

try {
  await mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.vcjyxe3.mongodb.net/coderhouse?retryWrites=true&w=majority'
  )
  console.log('Conectado a la base de datos')
} catch (error) {
  console.log(error)
}
