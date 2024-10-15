const express=require('express')
const colors=require('colors')
const dotenv=require('dotenv')
const connectDB=require('./config/db.js')
const authRoute=require('./routes/authRoute.js')
const cors = require('cors')

dotenv.config()
connectDB()


const app=express()

app.use(express.json())
app.use(cors())
app.use("/api/auth",authRoute)
app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome to E-commerce App</h1>")
})
const PORT=process.env.PORT || 4300

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgMagenta)
})
