if(process.env.NODE_ENV !="production"){
require("dotenv").config();
}

const express=require("express");
const router=express.Router();  //express object has router method and it creates a new router object ,we use it instead of app object
const wrapAsync=require("../utils/wrapAsync");
const { isloggedin } = require("../utils/middleware");
const listingcontroller=require("../controllers/listing");
//multer is a library which helps in sending the files from frontend to backend through forms
const multer  = require('multer');
const {storage}=require("../cloudinary");
var upload = multer({ storage})

//to optimize the paths we use router.route to place the same path routes at one

router.route("/")
    .get(wrapAsync(listingcontroller.index))
    .post(upload.single('file'),wrapAsync(listingcontroller.createlisting));
    
//Create/new  route
router.get("/new",isloggedin,listingcontroller.createlistingform);
router.get("/category/:listitems",listingcontroller.categoryseletion);
router.get("/search",listingcontroller.search);

router.route("/:id")
    .get(wrapAsync(listingcontroller.showlisting))
    .put(upload.single('file'),wrapAsync(listingcontroller.editlisting))
    .delete(isloggedin,wrapAsync(listingcontroller.destroylisting));

//Edit/Update route

router.get("/:id/edit",isloggedin,wrapAsync(listingcontroller.editlistingform));

module.exports=router;
