const Listing=require("../models/listing");

module.exports.index=async (req,res)=>{
    let listings=await Listing.find({});
    res.render("listings/home.ejs",{listings});
};

module.exports.createlistingform=(req,res)=>{
    res.render("listings/newpost.ejs");
};

module.exports.createlisting=async (req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    let {title,description,price,location,country,category}=req.body;
    let list=new Listing({
        title:title,
        description:description,
        price:price,
        location:location,
        country:country,
        category:category
    });
    list.owner=req.user._id;
    list.image={url,filename};
    await list.save();
    req.flash("sucess","New listing item is created");
    res.redirect("/listing");
};

module.exports.showlisting=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(`${id}`).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    console.log(listing);
    if(!listing){
        req.flash("error","Listing you requested doesn't exist");
        return res.redirect("/listing");
    }
    res.render("listings/showpost.ejs",{listing});
};

module.exports.editlistingform=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(`${id}`);

    if(!listing){
        req.flash("error","Listing you requested doesn't exist");
        return res.redirect("/listing");
    }

    res.render("listings/editpost.ejs",{listing});
};

module.exports.editlisting=async (req,res)=>{
    let {id}=req.params;
    let {title,description,price,image,location,country}=req.body;
    let listing=await Listing.findByIdAndUpdate(`${id}`,{title:title,
        description:description,
        price:price,
        image:image,
        location:location,
        country:country},{runValidators:true},{new:true});

    if(req.file){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        listing.save();
    }

    req.flash("sucess","listing item is Updated");
    res.redirect(`/listing/${id}`);
};

module.exports.destroylisting=async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("sucess","listing item is Deleted");
    res.redirect("/listing");
};

module.exports.categoryseletion=async(req,res)=>{
    let {listitems}=req.params;
    let lists=await Listing.find({category:`${listitems}`});
    res.render("listings/category.ejs",{lists});
};

module.exports.search=async(req,res)=>{
    let {search}=req.query;
    let searchlist=await Listing.find({$or:[{title:{$regex:`${search}`,$options:'i'}},{country:{$regex:`${search}`,$options:'i'}},{location:{$regex:`${search}`,$options:'i'}}]});
    res.render("listings/searchpage.ejs",{searchlist});
};