// const mongoose = require('mongoose')
// const productSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     slug:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     price:{
//         type:Number,
//         required:true,
//     },
//     size:{
//         type:String,
//         required:true
//     },
//     color: { 
//         type: [String], 
//         required: true
//     },
//     quantity:{
//         type:Number,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     category:{
//         type:mongoose.ObjectId,
//         ref:'Category',
//         required:true
//     },
//     photo:{
//         data:Buffer,
//         contentType:String
//     }
// },{timestamps:true});

// module.exports=mongoose.model('product',productSchema)

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.ObjectId,
        ref: "product",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: [String], required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    category: { type: mongoose.ObjectId, ref: "Category", required: true },
    photo: { data: Buffer, contentType: String },
    reviews: [reviewSchema], // Embedded review schema
}, { timestamps: true });

module.exports = mongoose.model("product", productSchema);
