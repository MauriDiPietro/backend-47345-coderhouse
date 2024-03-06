import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"; 
import { Document } from "mongoose"; 

@Schema()
export class User {
    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: 'user' })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;