const mongoose = require ('mongoose')

const dealSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        lowercase:true
    },
    price:{
        type:Number,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    days: {
        type: Number,  
        required: true,
        min: 0
    },
    hours: {
        type: Number,  
        min: 0,
        max: 23, 
        required: true
    },
    minutes: {
        type: Number,  
        min: 0,
        max: 59,  
        required: true
    },
    seconds: {
        type: Number,  
        min: 0,
        max: 59,  
        required: true
    }

},{timestamps:true})



module.exports = mongoose.model('deal',dealSchema)