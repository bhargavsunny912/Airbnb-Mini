const Usermodel=require("../models/user");

module.exports.signupform=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup=async(req,res)=>{
    try{
        let {username,password,email}=req.body;
        let newuser=new Usermodel({username,email});
        let registereduser=await Usermodel.register(newuser,password);
        console.log(registereduser);
        //automatically after signup ,by using req.login we will be loggedin in homepage
        req.login(registereduser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("sucess","Sucessfully completed signup process");
            res.redirect("/listing");
        });
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.loginform=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login=async(req,res)=>{
    req.flash("sucess","Logged in sucessfully,Welcome back Airbnb");
    let redirect=res.locals.redirectUrl  || "/listing";
    res.redirect(redirect);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("sucess","You are logged out !");
        res.redirect("/listing");
    });
};