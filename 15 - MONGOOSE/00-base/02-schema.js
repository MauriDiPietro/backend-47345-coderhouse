import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  age: { type: Number, require: true },
});

export const UserModel = model("users", UserSchema);
