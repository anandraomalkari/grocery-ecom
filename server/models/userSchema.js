const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.KEY;

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    carts: Array
});

//if data save at theat time middelware call

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            // Add your code to handle password modifications here
            this.password = await bcrypt.hash(this.password, 12);
            this.cpassword = await bcrypt.hash(this.cpassword, 12);
        }
        next();
    } catch (error) {
        // Handle any errors that might occur during this process
        console.error("An error occurred:", error);
        next(error); // Pass the error to the next middleware or callback
    }
});


//token genrate process
userSchema.methods.generateAuthtoken = async function(){
    try{
        let token = jwt.sign({_id:this._id},secretKey);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
        console.log(error);
    }
}


//add to cart data
userSchema.methods.addcartdata = async function(cart){
    try {
        this.carts = this.carts.concat(cart);
        await this.save();
        return this.carts
    } catch (error) {
        console.log(error);
    }
}

const USER = new mongoose.model("USER", userSchema);

module.exports = USER;