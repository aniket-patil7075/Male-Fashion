const mongoose=require('mongoose')
const colors=require('colors')
const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MONGODB databse ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error in mongodb ${error}`.bgRed.white)
    }
}
module.exports =connectDB