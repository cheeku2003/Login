const jwt =require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt= require("bcrypt");
const authenticate =require("../middleware/authenticate");
require("../db/conn");
const cookieParser =require("cookie-parser");
router.use(cookieParser()) ;
const User=require("../model/user");
router.get('/', (req, res) => {
  res.send(`hello from the aditya router`);
});

/*router.post("/register",async (req, res) => {
  const {name,email,phone,work,password,cpassword}=req.body;
  if(!name || !email || !phone || !work || !password || !cpassword)
  {
    return res.status(422).json({errror:"pls filled all field"});
  }
  //console.log(name);
  //console.log(email);
 // res.json({message:req.body});
  //res.send("mera regisster page");
  User.findOne({email:email})
  .then((userExist)=>
  {
    if(userExist){
      return res.status(422).json({errror:"email already exist"});
    }
    const user= new User({name,email,phone,work,password,cpassword});
    user.save().then(()=>
    {
      res.status(201).json({message:"user registered successfully"});
    }).catch((err)=>res.status(500).json({error:"failed to register"}));
  }).catch(err=>{console.log(err)});
});*/
router.post("/register",async (req, res) => {
  const {name,email,phone,work,password,cpassword}=req.body;
  if(!name || !email || !phone || !work || !password || !cpassword)
  {
    return res.status(422).json({errror:"pls filled all field"});
  }
  //console.log(name);
  //console.log(email);
 // res.json({message:req.body});
  //res.send("mera regisster page");
  try{
   const userExist=await User.findOne({email:email});
   if(userExist){
    return res.status(422).json({errror:"email already exist"});
  }    
  const user= new User({name,email,phone,work,password,cpassword});
   await user.save();
  
  res.status(201).json({message:"user registered successfully"});
  
  }
  catch(err)
  {
    console.log(err);
  }
});
router.post("/signin", async(req,res)=>{
  //console.log(req.body);
  //res.json({message:"awesome"});
  try{
const {email,password}=req.body;
if(!email || !password)
{
  return res.status(400).json({error:"pls filled the data"});
}
const userLogin = await User.findOne({email:email});
console.log(userLogin);
if(userLogin){
  const isMatch = await bcrypt.compare(password , userLogin.password);
  const  token = await userLogin.generateAuthToken();
  console.log(token);
  res.cookie("jwtoken",token,
  {
    expires:new Date(Date.now()+2589000000),
    httpOnly:true
  });
if(!isMatch)
{
  res.status(400).json({error:"invalid credintails pass"});
}
else {
  res.json({message:"user signin successfully"});
}
}else 
{
  res.status(400).json({error:"invalid credintails"});
}

}
  catch(err){
    console.log(err);
  }
}
)
router.get('/about', authenticate, (req, res) => {
  console.log(`hello my about`);
  res.send(req.rootUser);
});

router.get("/getdata",authenticate,(req,res)=>
{
console.log(`hello my about`);

res.send(req.rootUser);

})
router.post('/contact',authenticate,async(req,res)=>
{
  //  res.cookie("test","aditya");
   // res.send(`hello from the contact`);
try{
const {name, email, phone, message}=req.body;
console.log(name);
console.log(email);
console.log(phone);
console.log(message);
if(!name || !email || !phone || !message)
{
  console.log("error in contact form");
  return res.json({error:"plz filled the contact form"});
}
const userContact=await User.findOne({_id:req.userID});
if(userContact)
{
  const userMessage = await userContact.addMessage(name,email,phone,message);
  await userContact.save();
  res.status(201).json({message:"user conatct successfully"});
}
}
catch(error){
console.log(error);
}
})

router.get("/logout", (req,res)=>{
console.log(`hello my logout`);
res.clearCookie('jwtoken',{path:"/"});
res.status(200).send("user  logout");
});


module.exports = router;