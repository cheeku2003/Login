const dotenv =require("dotenv");
const mongoose=require("mongoose");
const express =require('express');
const cors = require('cors');
const app=express();
const path = require("path");
dotenv.config({path:'./config.env'});
//app.use=(require("./router/auth"));
//const User=require("./model/user");
const authRouter = require("./router/auth");
require('./db/conn.js');
app.use(cors());

const PORT=process.env.PORT;
app.use(express.json());



//app.use(middleware); // Register the middleware
/*app.get('/',(req,res)=>
{
    res.send(`hello from the aditya app.js`);
})*/
//app.get('/about',(req,res)=>
//{
  //  res.send(`hello from the about`);
//})
//app.get('/contact',(req,res)=>
//{
  //  res.cookie("test","aditya");
   // res.send(`hello from the contact`);
//})
app.get('/signin',(req,res)=>
{
    res.send(`hello from the contact`);
})
app.get('/signup',(req,res)=>
{
    res.send(`hello from the contact`);
});
app.use(authRouter); 

//console.log("subscribe");
//app.listen(9000,()=>{
   // console.log(`server is running at port no 83000`);
//}
//)
app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",function(req,res)
{
  res.sendFile(path.joij(__dirname,"./client/build/index.html"));
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  
  
  
  
  
  