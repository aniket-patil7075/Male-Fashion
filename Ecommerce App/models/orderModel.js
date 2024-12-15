const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    userEmail: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, required: true },
    status: { type: String, required: true },
    color: { type: [String], required: false }, // Array of colors
    size: {
        type: [String], // Define `size` as an array of strings
        default: [],    // Optional: Default to an empty array
      },
    slug: { type: String, required: false },
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Order", orderSchema);
  