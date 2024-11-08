const Listing=require("../models/listing");
const Review=require("../models/review");

module.exports.addreviews=async(req,res)=>{
    let {id}=req.params;
    let {message,rating}=req.body;
    let listingreview=await Listing.findById(`${id}`);
    let newreview=new Review({
        message:message,rating:rating
    });
    newreview.author=req.user._id;

    listingreview.reviews.push(newreview);
    await listingreview.save();
    await newreview.save();
    req.flash("sucess","Review is created");
    res.redirect(`/listing/${id}`);
};

module.exports.destroyreview=async(req,res)=>{
    let {id,reviewid}=req.params;
    await Review.findByIdAndDelete(reviewid);
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});
    req.flash("sucess","Review is deleted");
    res.redirect(`/listing/${id}`);
};