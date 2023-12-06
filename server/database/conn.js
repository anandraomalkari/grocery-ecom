const mongoose = require("mongoose");

const DB = process.env.DATABASES;

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=> console.log("Error" + error.message))