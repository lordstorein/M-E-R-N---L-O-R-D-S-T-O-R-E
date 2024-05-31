require('dotenv').config()
const User = require('../models/user-model.js');
const bCrypt = require('bcryptjs');
const Razorpay = require('razorpay')
const crypto = require('crypto');
const Payment = require('../models/payment-model.js')

// F A L T U
const home = async (req, res)=>{
    try {
        res.status(200).send('hello its me')
    } catch (error) {
        console.log(error);
    }
};

// S I G N U P
const signup = async (req, res)=>{
    try {
        const { username, email, password} = req.body;

        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({msg: "email already exist"})
        }

        const saltRound = 10;
        const hash_password = await bCrypt.hash(password, saltRound)

        const userCreated = await User.create({username, email, password:hash_password})

        res.status(200).send({message: 'registration successful', token: await userCreated.generateToken(), userId: userCreated._id.toString()})
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const userExists = await User.findOne({ email });

        if (!userExists) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isPasswordValid = await bCrypt.compare(password, userExists.password);
        if (isPasswordValid) {
            res.status(200).send({
                message: 'Login successful',
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

//R A Z O R P A Y
const checkout = async (req, res)=>{
    
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_API_KEY,
        key_secret: process.env.RAZORPAY_API_SECRET,
    })    

    try {
        const options = {
            amount: Number(req.body.amount*100), // amount in smallest currency unit
            currency: "INR"
        };
        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
            productId: req.body.productId // Include the order in the response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const user = async (req, res)=>{
    try {
        const userData = await req.user;
        return res.status(200).json({ userData })
    } catch (error) {
        console.log('error from the user route ')
    }
}

const paymentVerification = async (req, res)=>{

    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const productId = req.query.productId;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET).update(body.toString()).digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if(isAuthentic){

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            productId,
            eventDate: new Date(),
            eventTime: new Date(),
            eventTimestamp: new Date(),
        })


        const productUrlMap = {
            'ae1': 'https://lordstore.shop/',
            'ae2': 'https://lordstore.shop/project'
        }

        const redirectUrl = productUrlMap[productId];

        if(redirectUrl){
            res.redirect(redirectUrl)
        }
        else{
            res.redirect('https://m-e-r-n-l-o-r-d-s-t-o-r-e.vercel.app/')
        }
    }else{
        res.status(400).json({
            success: false,
        })
    }
};

const getKey = (req,res)=>{
    res.status(200).json({key: process.env.RAZORPAY_API_KEY})
}


module.exports = { home, signup, login, checkout, paymentVerification, getKey, user};
