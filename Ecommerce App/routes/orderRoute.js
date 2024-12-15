const express = require("express");
const { updateOrder, createOrders } = require("../controllers/orderController.js");

const router = express.Router();

router.post("/createorder", createOrders);
router.put("/update", updateOrder);

module.exports = router;
