import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            index: { 
                unique: true,
             },
             minlength: [5, 'this title is short'],
            //  maxlength: 10,
            // match: /palabra/,
            // enum: ['palabra1', 'palabra2'],
            // min: 20, --> type Number
            // max: 50,
            // lowercase: true,
            // trim: true,
            // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   // --> email valido,
        },
        body: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    }
);

export const NewsModel = mongoose.model('News', Schema);