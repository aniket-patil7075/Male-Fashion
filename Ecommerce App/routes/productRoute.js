const express=require('express')
const { createProductController,getProductsController,getProductphotoController,getSingleProductController,searchProductController,filterProductController,updateProductController,productDeleteController, createReviewController } = require('../controllers/productController')
const router=express.Router()
const formidable=require('express-formidable')
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware')

router.get('/getproducts',getProductsController)
router.post('/create',requireSignIn,isAdmin,formidable(),createProductController)
router.get('/getsingleproduct/:slug', getSingleProductController);
router.get('/getphoto/:pid',getProductphotoController)
router.delete('/delete/:pid',productDeleteController)
router.put('/update/:pid',requireSignIn,isAdmin,formidable(),updateProductController)
router.post('/filter',filterProductController)
router.get('/search/:key',searchProductController)
router.post("/reviews", createReviewController);
module.exports=router