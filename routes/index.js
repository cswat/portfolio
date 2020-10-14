const express=require('express');
const router=express.Router();
const {data}=require("../data.json");

router.get('/', (req,res)=>{
  res.render('index', {data});
});

router.get('/endorsements', (req,res)=>{
  let endorsements = data.endorsements
  res.render('endorsements', {data, endorsements});
});

//Setting up the following paths manually for now but future state is to build these programmatically based on data.json's project_types.

router.get('/dataviz', (req,res)=>{
  let selectedShowcase = data.project_types[0]

  //create a list of projects applicable to the route and store them in showcaseProjects
  let showcaseProjects = []
  data.projects.forEach(project => {
    if (project.project_type == 'dataviz') {
      showcaseProjects.push(project)
    };
  })
  res.render('showcase', {data, selectedShowcase, showcaseProjects});
});

// router.get('/graphicdesign', (req,res)=>{
//   let selectedShowcase = data.project_types[1]
//   let showcaseProjects = []
//   data.projects.forEach(project => {
//     if (project.project_type == 'graphicdesign') {
//       showcaseProjects.push(project)
//     };
//   })
//   res.render('showcase', {data, selectedShowcase, showcaseProjects});
// });

router.get('/webdev', (req,res)=>{
  let selectedShowcase = data.project_types[1]
  let showcaseProjects = []
  data.projects.forEach(project => {
    if (project.project_type == 'webdev') {
      showcaseProjects.push(project)
    };
  })
  res.render('showcase', {data, selectedShowcase, showcaseProjects});
});

router.get('/writing', (req,res)=>{
  let selectedShowcase = data.project_types[2]
  let showcaseProjects = []
  data.projects.forEach(project => {
    if (project.project_type == 'writing') {
      showcaseProjects.push(project)
    };
  })
  res.render('showcase', {data, selectedShowcase, showcaseProjects});
});

module.exports=router