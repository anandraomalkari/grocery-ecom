require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("./database/conn");
const cookieParser = require("cookie-parser");
const Products = require("./models/productSchema"); 
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);
 
const port = 27017;

app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`);
});


DefaultData();