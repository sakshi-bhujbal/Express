const express=require("express");
const router=express.Router();
const path=require("path")
const blog=require("../data/blogs")

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Views/index.html'))
})

router.get('/blog',(req,res)=>{
    blog.forEach((e)=>{
        console.log(e.title+" "+e.Content);
    });
    res.sendFile(path.join(__dirname,'../Views/blogHome.html'))
})

router.get('/blogpost/:slug',(req,res)=>{
    myblog=blog.filter((e)=>{
        return e.slug==req.params.slug
    });
    res.sendFile(path.join(__dirname,'../Views/blogPage.html'))
})

module.exports=router;