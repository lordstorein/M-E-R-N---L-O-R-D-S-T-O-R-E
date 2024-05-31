const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    }
})

userSchema.methods.generateToken = async function (){
    try {
        //payload
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },
        //signature
        process.env.JWT_SECRET_KEY, {
            expiresIn: '30d',

        }
    )

    } catch (error) {
        console.log(error);
    }
}

const user = new mongoose.model('User', userSchema);

module.exports = user;