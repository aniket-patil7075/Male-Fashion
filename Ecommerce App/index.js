const express=require('express')
const colors=require('colors')
const dotenv=require('dotenv')
const connectDB=require('./config/db.js')
const authRoute=require('./routes/authRoute.js')
const categoryRoutes=require('./routes/categoryRoute.js')
const productRoutes= require('./routes/productRoute.js')
const dealRoutes = require('./routes/dealRoute.js')
const userRoutes=require('./routes/userRoute.js')
const cartRoutes = require('./routes/cartRoute.js')
const orderRoutes = require('./routes/orderRoute.js')
const cors = require('cors')

dotenv.config()
connectDB()


const app=express()


app.use(express.json())
app.use(cors())
app.use("/api/auth",authRoute)
app.use("/api/category",categoryRoutes)
app.use("/api/product",productRoutes)
app.use("/api/deal",dealRoutes)
app.use("/api/user",userRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/orders",orderRoutes)

app.get("/",(req,resp)=>{
    resp.send("<h1>Welcome to E-commerce App</h1>")
})
const PORT=process.env.PORT || 4300

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgMagenta)
})
