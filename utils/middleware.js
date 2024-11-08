module.exports.isloggedin=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be loggedin to access the listing");
        return res.redirect("/login");
    }
    next();
}; 

module.exports.postredirect=(req,res,next)=>{
    if( req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}; 

const Review=require("../models/review");

module.exports.isreviewowner=async(req,res,next)=>{
    let {id,reviewid}=req.params;
    let review=await Review.findById(reviewid);
    if(!review.author._id.equals(res.locals.currentuser._id)){
        req.flash("error","You are not the author of the review");
        return res.redirect(`/listing/${id}`);
    }
    next();
};