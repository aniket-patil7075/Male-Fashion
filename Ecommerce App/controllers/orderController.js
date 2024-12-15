const Order = require("../models/orderModel.js");

const createOrders = async (req, res) => {
    try {
      const { orders } = req.body;
  
      // Validate if orders data is an array
      if (!orders || !Array.isArray(orders)) {
        return res.status(400).json({ message: "Invalid orders data." });
      }
  
      // Normalize and filter orders
      const filteredOrders = orders.map((order) => {
        // Split `color` into an array if it's a string
        const colorsArray = typeof order.color === "string" 
          ? order.color.split(",") 
          : Array.isArray(order.color) 
            ? order.color 
            : [];
  
        // Convert `size` into an array if it's a string
        const sizesArray = typeof order.size === "string" 
          ? order.size.split(",") 
          : Array.isArray(order.size) 
            ? order.size 
            : null;
  
        return {
          orderId: order.orderId,
          name: order.name,
          quantity: order.quantity,
          userEmail: order.userEmail,
          price: order.price,
          date: order.date ? new Date(order.date) : new Date(),
          status: "Pending", // Default status
          color: colorsArray, // Split colors into an array
          size: sizesArray, // Convert sizes to an array
          slug: order.slug || null,
          description: order.description || null,
          createdAt: order.createdAt ? new Date(order.createdAt) : new Date(),
          updatedAt: order.updatedAt ? new Date(order.updatedAt) : new Date(),
        };
      });
  
      // Validate required fields for each order
      const requiredFields = ["orderId", "name", "price", "quantity", "userEmail"];
      const validOrders = filteredOrders.filter((order) =>
        requiredFields.every((field) => order[field] !== undefined && order[field] !== null)
      );
  
      // Save valid orders to the database
      await Order.insertMany(validOrders);
  
      res
        .status(201)
        .json({ message: "Orders saved successfully", orders: validOrders });
    } catch (error) {
      console.error("Error placing orders:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
    

const updateOrder = async (req, res) => {
  const { orderId, name, quantity, userEmail, price, date, status } = req.body;

  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { orderId },
      { name, quantity, userEmail, price, date, status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res
      .status(200)
      .json({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createOrders, updateOrder };
