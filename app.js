const express= require('express');
const dotenv= require('dotenv');
const UserRoute= require('./Route/UserRoute');
const ProfileRoute= require('./Route/ProfileRoute')
const connectDB = require('./Config/db');
const cors= require('cors');
const app= express();
app.use(cors())
app.use(express.json());
dotenv.config();
PORT = process.env.PORT;

connectDB();
app.use('/api/user',UserRoute);
app.use('/api/profile',ProfileRoute);
app.listen(process.env.PORT,(req,res)=>{
    console.log(  `Server is running on ${7000}`)
})
