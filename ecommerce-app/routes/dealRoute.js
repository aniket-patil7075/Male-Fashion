const express = require('express')
const {createDealController,getDealController,getDealphotoController} = require('../controllers/dealWeekController')
// const getDealController = require('../controllers/dealWeekController')
const router = express.Router()
const formidable = require('express-formidable')
const {requireSignIn,isAdmin} = require('../middlewares/authMiddleware')

router.post('/createdeal',requireSignIn,isAdmin,formidable(),createDealController)
router.get('/getdeal',getDealController)
router.get('/getphoto/:pid',getDealphotoController)

module.exports=router