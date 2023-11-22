import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true,
    index: true
  },
  last_name: { type: String, required: true },
  email:  { type: String, required: true, unique: true },  
  gender:  { type: String, required: true },
  pets:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pets',
      default: []
    }
  ]
});

UserSchema.pre('find', function(){
  this.populate('pets')
})

export const UserModel = mongoose.model(
  'users',
  UserSchema
); 


