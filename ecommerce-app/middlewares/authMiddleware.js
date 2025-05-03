const JWT = require ('jsonwebtoken')
const userModel = require('../models/userModel')

const requireSignIn=(req,res,next)=>{
    try{
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(err){
        console.log(err)
    }
}

const isAdmin = async(req,res,next) => {
    
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role!==1){
            res.status(401).send({
                success:false,
                message:"Not an authorized function"
            })
        }
        else{
            next()
        }
    }catch(err){
        console.log(err)
    }
}

module.exports={requireSignIn,isAdmin}