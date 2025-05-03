const express=require('express')
const { registerController, loginController,testController, forgotPasswordController } = require('../controllers/authController')
const {requireSignIn,isAdmin} = require('../middlewares/authMiddleware')
const router=express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/forgotPassword',forgotPasswordController)
router.get('/test',requireSignIn,isAdmin, testController)
router.get('/userAuth',requireSignIn,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})
router.get('/adminauth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

module.exports=router