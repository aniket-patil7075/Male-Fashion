const express = require("express");
const { getAllOrders, updateOrder, createOrders } = require("../controllers/orderController.js");

const router = express.Router();

router.get('/allorders', getAllOrders);
router.post("/createorder", createOrders);
router.put("/update", updateOrder);

module.exports = router;
