const jwt=require("jsonwebtoken");
const User= require("../model/user");
const Authenticate=async( req,res,next)=>
{
try{
const token = req.cookies.jwtoken;
//console.log("Token received from the request:", token);
const verifyToken = jwt.verify(token , process.env.SECRET_KEY);
//console.log("Decoded Token:", verifyToken);
//const rootUser= await User.findOne({_id:verifyToken._id ,"tokens.token":token});
const rootUser = await User.findById(verifyToken._id);

//console.log("User Found in the Database:", rootUser);
  
if(!verifyToken){ throw new Error("user not found")}
req.token = token;
req.rootUser = rootUser;
req.userID = rootUser._id;

next();
}

catch(err)
{
    res.status(401).send("unauthorized :no token provided");
    console.log(err)
}
}
module.exports= Authenticate;