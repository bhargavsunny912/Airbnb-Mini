const express=require("express");
const app=express();
const mongoose=require("mongoose");
const methodoverride=require("method-override");
const path=require("path");
const ejsMate=require("ejs-mate");
const ExpessError=require("./utils/Express-Error");
const listingroute=require("./routes/listing");
const reviewroute = require("./routes/reviews");
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const passportlocal=require("passport-local");
const Usermodel=require("./models/user");
const userroute=require("./routes/user");

app.engine("ejs",ejsMate);
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let url=process.env.Altas_url;

Main().then((res)=>{console.log("connection sucess")}).catch((err)=>{console.log(err)})
async function Main(){
    await mongoose.connect(url,{
        family:4,
    });    
}

const store=MongoStore.create({
    mongoUrl:url,
    crypto:{
        secret:process.env.secret,
    },
    touchAfter:24*3600,
});

const sessionoptions={
    store,
    secret:process.env.secret,
    resave:false,
    saveUninitialized:true,
    cookie:{
        httpOnly:true,
        expires:Date.now()+ 31*24*60*60*1000 ,
        maxAge:31*24*60*60*1000 ,
    }
}
app.use(session(sessionoptions));

//middle ware to send data from flash code message to ejs page,  res.locals helps to send data

app.use(flash());

//passport is a express middleware used to authenticate in nodejs -login,singup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportlocal(Usermodel.authenticate()));
passport.serializeUser(Usermodel.serializeUser());
passport.deserializeUser(Usermodel.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentuser=req.user;
    res.locals.sucess=req.flash("sucess");
    res.locals.error=req.flash("error");
    next();
})

//Routes middleware to simply the seperate type of routes

app.use("/listing",listingroute);

app.use("/listing/:id/reviews",reviewroute);

app.use("/",userroute);

// //error handling middlewares

app.all("*",(req,res,next)=>{   //all = if all the routes are not matched ,then the * is choosed as default
    next(new ExpessError(400,"Incorrect search page,page not found"));
})

app.use((err,req,res,next)=>{
    let {status=500,message="incorrect url"}=err;
    res.status(status).render("listings/error.ejs",{message});
});

app.listen(8080,()=>{
    console.log("server has started at port 8080");
});
