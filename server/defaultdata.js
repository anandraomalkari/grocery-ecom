//Insert the data into database

const Products = require("./models/productSchema");
const productsdata = require("./constant/productsdata");



const DefaultData = async()=>{
    try{
        // why this add beacuse of if the refresh or save the file then automatically add the data into 
        // databsae that's not add into a database then used this code they automatically delete. 
        await Products.deleteMany({}); 
        
        //Why used the insertmany beacuse of the data will be stored into arrya format and lots of data here that's the reason insertMany use
        const storeData = await Products.insertMany(productsdata);
        console.log(storeData);
    }catch(error){
        console.log('Error'+ error.message);
    }
};

module.exports = DefaultData;