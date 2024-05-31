require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Razorpay = require('razorpay')
const app = express()
const router = require('./routes/auth-router')
const connnectDB = require('./utils/db')

const corsOptions = {
    origin: "http://localhost:5173",
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


