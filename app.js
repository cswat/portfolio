const express=require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.listen(3000, ()=> {
  console.log("The app is listening to port 3000");
});

const mainRouter=require('./routes')
const projectRouter=require('./routes/project');

app.use(mainRouter);
app.use('/project', projectRouter);

app.use('/static', express.static('public'));

app.use((req,res,next)=>{
  const err=new Error('The page you are looking for does not exist!');
  err.status=404;
  next(err);
});

app.use((err,req,res,next)=> {
  const error=err;
  res.status(error.status);
  res.render('error', {error});
});
