var express=require("express");
var router=express.Router();

router.use(function timelog(req,res,next){
    console.log('time:'+Date.now);
    next();
})

router.get('/',function(req,res){
    res.send('birds get');
})

router.get('/about',function(req,res){
    res.send('about get');
})

module.exports=router;
