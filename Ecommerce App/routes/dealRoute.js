const express = require('express')
const createDealController = require('../controllers/dealWeekController')
const router = express.Router()
const formidable = require('express-formidable')
const {requireSignIn,isAdmin} = require('../middlewares/authMiddleware')

router.post('/createdeal',requireSignIn,isAdmin,formidable(),createDealController)

module.exports=router