const dealWeekModel = require ('../models/DealWeekModel')
const slugify = require('slugify')
const fs = require('fs')
const createDealController = async (req,res)=>{
    try{
        const {title,price,days,hours,minutes,seconds}=req.fields
        const {photo} = req.files

        switch(true)
        {
            case !title:
            return res.status(500).send({error:"Title is required"})
        case !price:
            return res.status(500).send({error:"Price is required"})
        case !days:
            return res.status(500).send({error:"Days is required"})
        case !hours:
            return res.status(500).send({error:"Hours is required"})
        case !minutes:
            return res.status(500).send({error:"Minutes is required"})
            case !seconds:
            return res.status(500).send({error:"Seconds is required"})
        case !photo && photo.size > 1000000:
            return res.status(500).send({error:"Photo is required and should be less than 1Mb"})
        }
        
        const deal = new dealWeekModel({...req.fields,slug:slugify(title)})
        if(photo)
            {
                deal.photo.data=fs.readFileSync(photo.path)
                deal.photo.contentType=photo.type
            }

        await deal.save()
        res.status(201).send({
            success:true,
            message:"New Deal Created Successfully",
            deal
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error in creating deal"
        })
    }
}

const getDealController=async (req,res)=>{
    try{
     const deal=await dealWeekModel.find({}).select("-photo").limit(10).sort({createdAt:-1})
     res.status(200).send({
         success:true,
         total:deal.length,
         message:"All Deals",
         deal,
         
     })
    } catch(error){
     res.status(500).send({
         success:false,
         message:"Error in getting deals",
         error:error.message
     })
    }
 }

 const getDealphotoController=async (req,resp)=>{
    try{
        const deal=await dealWeekModel.findById(req.params.pid).select("photo")
        if(deal.photo.data)
        {
            resp.set('Content-type',deal.photo.contentType)
            return resp.status(200).send(deal.photo.data)
        }
    } catch(error){
        resp.status(500).send({
            success:false,
            message:"Error getting Deal Photo",
            error
        })
    }
}

module.exports={createDealController,getDealController,getDealphotoController}