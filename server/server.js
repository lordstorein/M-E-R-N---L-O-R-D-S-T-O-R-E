require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Razorpay = require('razorpay')
const app = express()
const router = require('./routes/auth-router')
const connnectDB = require('./utils/db')

const corsOptions = {
    origin: "https://m-e-r-n-l-o-r-d-s-t-o-r-e.vercel.app",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', router )

const PORT = process.env.PORT || 5000;


connnectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('ready')
    })
})


