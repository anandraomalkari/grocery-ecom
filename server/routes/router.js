const express = require('express');
const router = new express.Router();
const Products = require('../models/productSchema');
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const athenticate = require("../middleware/authenticate");
// const crypto = require("crypto");
// const Razorpay = require("express").Router();
// const Razorpay = require("razorpay");
const stripe = require("stripe")("sk_test_51O8cA4SDFkgabP6R8iUQoDsd9nVbrOPrhzKIc57E1sAN1ymYdZOMhp1QHeiAmXEblx6VCLfgzK3S8L18k0QnJ7Y900ULldPwm3");

//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);





//get productsdata API
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log("console the data" + productsdata);
        res.status(201).json(productsdata);

    } catch (error) {
        console.log("error" + error.message);
    }
})




//add qunatiity to product



//get invidual data
router.get("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        //you can write also this way const id = req.param.id;
        //  console.log(id);

        const individualdata = await Products.findOne({ id: id });
        // console.log(individualdata + "individual Data");

        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log("error" + error.message)

    }
})



//register user api
router.post("/register", async (req, res) => {
    //console.log(req.body);

    const { fname, email, mobile, password, cpassword } = req.body;
    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill the all data" });
        console.log("not data available");
    };

    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            res.status(422).josn({ error: "this user alredy present" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password and confirm password not match" });
        } else {
            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });

            const storedata = await finalUser.save();
            console.log(storedata);


            res.status(201).json(storedata);
        }
    } catch (error) {
        console.log("error the bhai catch ma for registratoin time" + error.message);
        res.status(422).send(error);
    }
})



//login

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the all data" });
    };
    try {
        const userlogin = await USER.findOne({ email: email });
        //console.log("hello");
        console.log(userlogin + "user value");
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            //console.log(isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid deatils of user" });
            } else {
                //token genrate
                const token = await userlogin.generateAuthtoken();
                //console.log(token); 

                res.cookie("Grocery", token, {
                    expires: new Date(Date.now() + 900000),
                    httpOnly: true
                })
                res.status(201).json(userlogin);
            }
        } else {
            res.status(400).json({ error: "No such user found" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid deatils of data" });
        console.log("error the bhai catch ma for login time" + error.message);
    }
});


//adding the data into cart

router.post("/addcart/:id", athenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id:id });
        console.log(cart + "cart value");


        const UserContact = await USER.findOne({ _id:req.userID});
        console.log(UserContact);

        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "no such user exist" })
        }


    } catch (error) {
        res.status(401).json({ error: "no such user exist" })
    }
});



//get cart deatils
router.get("/cartdeatils", athenticate,async(req,res)=>{
    try {
        const buyuser = await USER.findOne({_id:req.userID});
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error" + error);
    }
})


//get valid user
router.get("/validuser", athenticate,async(req,res)=>{
    try {
        const validuserone = await USER.findOne({_id:req.userID});
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error" + error);
    }
})


//remove item from cart
router.delete('/remove/:id',athenticate, async (req, res) => {
    try {
        const {id} = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((cruval)=>{
            return cruval.id != id;

        });
            req.rootUser.save();
            res.status(201).json(req.rootUser);
    } catch (error) {
        console.log("Error" + error);
        res.status(400).json(req.rootUser);
    }
})



//for user logout
router.get("/logout",athenticate,(req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token;
        });
        res.clearCookie("Grocery", {path:"/"});

        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");
    } catch (error) {
        console.log("error for user logout");
        
    }
});


// //create orders
// router.post("/orders", athenticate ,async(req,res)=>{
//     try {
//        const instance = new Razorpay({
//         key_id: process.env.RAZORPAY_ID_KEY,
//         key_secret: process.env.RAZORPAY_SECRET_KEY,
//        });
//        const option={
//         price: req.body.price * 100,
//         currency: "INR",
//         recepit: crypto.randomBytes(10).toString("hex"),
//        };

//        instance.orders.create(option,(error, order)=>{
//         if(error){
//             console.log(error);
//             res.status(400).json({message:"Something Went Wrong "});
//         }
//         res.status(201).json({data:order});
//        });
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({message: "Internal Server Error!"});1
//     }
// });


// //payment verify
// router.post('/verify', async (req, res) =>{
//     try {
//         const{
//          razorpay_order_id,
//          razorpay_payment_id,
//          razorpay_signature}= req.body;
//         const sign = razorpay_order_id + "|" + razorpay_payment_id;
//         const expectedSign = crypto
//         .createHmac('sha256',process.env.RAZORPAY_SECRET_KEY )
//         .update(sign.toString())
//         .digest('hex');
//         if(expectedSign === razorpay_signature){
//             res.status(201).json({message: "Payment verified successfully"}); 
//         }else{
//             res.status(400).json({message: "Invalid signature sent!"});
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({message: "Invalid signature sent!"})
//     }
// })




// payment
router.post("/api/create-checkout-session",async(req,res)=>{
    const {cartdata} = req.body;
    // console.log(products);


    const lineItems = products.map((cartdata)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:cartdata.title,
                images:[cartdata.url]
            },
            unit_amount:cartdata.price * 100,
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        // success_url:"/client/src/components/Home.js",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
})

module.exports = router;