import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const UserSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true,
    index: true
  },
  last_name: { type: String, required: true },
  age: { type: Number },
  email:  { type: String, required: true, unique: true },  
  password: { type: String, required: true },
  role: { type: String, default: 'user'}
});

UserSchema.plugin(mongoosePaginate);

UserSchema.pre('find', function(){
  this.populate('products')
})

export const UserModel = mongoose.model(
  'users',
  UserSchema
); 


