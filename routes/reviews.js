const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing");
const Review=require("../models/review");
const wrapAsync=require("../utils/wrapAsync");
const ExpessError=require("../utils/Express-Error");
const { isloggedin,isreviewowner } = require("../utils/middleware");
const reviewcontroller=require("../controllers/review");

// POST reviews

router.post("/",isloggedin,wrapAsync(reviewcontroller.addreviews));

//Delete Reviews

router.delete("/:reviewid",isloggedin,isreviewowner,wrapAsync(reviewcontroller.destroyreview));

module.exports=router;