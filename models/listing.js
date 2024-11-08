const mongoose=require("mongoose");
const Review=require("./review.js");
const review = require("./review.js");

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
       url:String,
       filename:String,
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"review"
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    category:{
        type:String,
        required:true
    }
});

//mongoose query middlewares

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in : listing.reviews}});
    }
});

const Listing=new mongoose.model("Listing",listingSchema);

module.exports=Listing;