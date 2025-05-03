const express=require('express')
const getUserController=require('../controllers/userController')
const { model } = require('mongoose')
const router=express.Router()
router.get('/getuser',getUserController)
module.exports=router