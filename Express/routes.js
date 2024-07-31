const express=require('express');
const router=express.Router();
const r=require('./utils/path')
const path=require('path');
router.use('/add-product',(req,res,next)=>{
    res.sendFile(path.join(r,'views','add-product.html'));
})
router.post('/store-product',(req,res,next)=>{
    console.log(req.body);
    res.send('<h1>Success</h1>');
})
module.exports=router;