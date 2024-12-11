const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const { neon } = require("@neondatabase/serverless");
const sql = neon(process.env.DATABASE_URL);
const app = express()
app.use(express.json());
const authRoutes = require('./routes/authRoutes')
app.use('/api/auth',authRoutes);



app.listen(process.env.PORT ,(req,res)=>{
    console.log(`server is listening on port ${process.env.PORT}`)
})