const express= require('express');
const dotenv= require('dotenv');
const UserRoute= require('./Route/UserRoute');
const connectDB = require('./Config/db');

const cors= require('cors');
const app= express();
app.use(cors())
app.use(express.json());
dotenv.config();
connectDB();
app.use('/api/user',UserRoute);
app.listen(process.env.PORT,(req,res)=>{
    console.log(  `Server is running on ${7000}`)
})