const express=require("express");
const router=express.Router();
const Usermodel=require("../models/user"); 
const passport=require("passport");
const { postredirect } = require("../utils/middleware");
const usercontroller=require("../controllers/user");

//callbacks= usercontroller.signupform

router.route("/signup")
    .get(usercontroller.signupform)  
    .post(usercontroller.signup);


router.route("/login")
    .get(usercontroller.loginform)
    .post(postredirect,
        passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),
        usercontroller.login);

router.get("/logout",usercontroller.logout);

router.get("",(req,res)=>{
    res.redirect("/listing");
});

module.exports=router;