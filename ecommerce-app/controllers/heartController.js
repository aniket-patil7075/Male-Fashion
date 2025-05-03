const Heart = require("../models/heartModel");

exports.addItemToHeart = async (req,resp)=>{       
    try {
        const {name,description,slug,price,quantity,category}=req.body
        console.log(req.body)

const heartitem=new Heart(req.body)

await heartitem.save()
resp.status(201).send({
    success:true,
    message:"heartitem created successfully",
    heartitem
})
    } catch(error)
    {
        resp.status(500).send({
            success:false,
            error,
            message:"Error in hearting heartitem"
        })
    }
}
exports.getHeartitem=async (req,resp)=>{
    try{
     const heartitem=await Heart.find({}).select("-photo").limit(10).sort({createdAt:-1}).populate("category")
     resp.status(200).send({
         success:true,
         total:heartitem.length,
         message:"All Products",
         heartitem,
         
     })
    } catch(error){
     resp.status(500).send({
         success:false,
         message:"Error in getting products",
         error:error.message
     })
    }
 }
 exports.deleteHeartitem=async (req,resp)=>{
    try{
        await Heart.findByIdAndDelete(req.params.pid).select("-photo")
        resp.status(200).send({
            success:true,
            message:"Heart item deleted successfully",
        })
    }catch(error){
        resp.status(500).send({
            success:false,
            message:"Error deleting Heartitem",
            error
        })
    }
}