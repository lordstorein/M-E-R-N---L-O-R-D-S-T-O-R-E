require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Razorpay = require('razorpay')
const app = express()
const router = require('./routes/auth-router')
const connnectDB = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')

const corsOptions = {
    origin: "https://www.lordstore.shop",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', router )

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;


connnectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('ready')
    })
})


