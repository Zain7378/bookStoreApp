import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String
})
const Book = new mongoose.model('book',bookSchema);
export default Book;