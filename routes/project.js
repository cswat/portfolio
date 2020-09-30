const express=require('express');
const router=express.Router();
const {projects}=require("../data.json");



router.get('/:id', (req,res)=>{
  const id=req.params.id;
  const currentProject=projects[(id)-1];
  const project_type = projects.project_type;
  const technologies=currentProject.technologies;
  const imageURLs=currentProject.image_urls;
  res.render('project',{currentProject, project_type, technologies, imageURLs});
});

module.exports=router