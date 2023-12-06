const mongoose = require("mongoose");


const productsSchema = new mongoose.Schema({
    id:String,
    url:String,
    title:Object,
    price:Object,
    description:String,
    quality: String
});


//model define mean create an collection

const Products = new mongoose.model("products", productsSchema);


module.exports = Products;