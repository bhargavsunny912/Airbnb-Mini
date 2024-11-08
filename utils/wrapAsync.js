module.exports=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((err)=>next(err));
    }
}

//it can also written as

// function wrapAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch(next);
//     }
// }