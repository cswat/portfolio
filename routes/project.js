const express=require('express');
const router=express.Router();
const {data}=require("../data.json");



router.get('/:id', (req,res)=>{
  const id=req.params.id;
  const currentProject=data.projects[(id)-1];
  const technologies=currentProject.technologies;
  const imageURLs=currentProject.image_urls;
  res.render('project',{data, currentProject, technologies, imageURLs});
});

module.exports=router