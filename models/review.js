const mongoose=require("mongoose");

const reviewSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:10,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now(),
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const review=new mongoose.model("review",reviewSchema);

module.exports=review;