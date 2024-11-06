const express = require("express");
const {addItemToHeart,getHeartitem, deleteHeartitem} = require("../controllers/heartController");

const router = express.Router();

router.post("/addtoheart/:id", addItemToHeart);
router.get("/getheart", getHeartitem);
router.delete("/deleteheart/:pid", deleteHeartitem);


module.exports = router;