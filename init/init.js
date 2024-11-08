const mongoose=require("mongoose");
const intdata=require("./data");
const Listing=require("../models/listing");

Main().then((res)=>{console.log("connection sucess")}).catch((err)=>{console.log(err)})

async function Main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Airbnb");    
}

async function intData() {
    await Listing.deleteMany({});
    intdata.data=intdata.data.map((obj)=>({...obj,owner:"6724854946fa3c9a4f20cdfc"}));
    await Listing.insertMany(intdata.data);
    console.log(intdata.data);
}

intData();