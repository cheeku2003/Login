import React ,{ useState} from "react";
import signin from "../images/signin.svg";
import { NavLink , useNavigate} from "react-router-dom";
const Signup=()=>
{
    const navigate = useNavigate();
    const [user, setuser]=useState({name:"", email:"",phone:"",work:"",password:"" ,cpassword:""  });
        let name, value;
        const handleInputs=(e)=>
        {
            console.log(e);
            name=e.target.name;
         value=e.target.value;
         setuser({...user,[name]:value});
        }
const PostData=async(e)=>
{
e.preventDefault();
const {name,email, phone, work,password, cpassword}=user;
 const res= await fetch("/register",
{
    method:"POST", 
    headers:
    {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        name, email, phone, work, password, cpassword
    })
});
const data = await res.json();

if(data.status === 422 || ! data )
{
    window.alert("Invalid registration");
    console.log("invalid registration");
}
else {
  window.alert(" registration successful");
  console.log("registration successfully");  

  navigate("/login");
}
}



    return (
        <section className="signup ">
            <div className="container mt-5">
                <div className="signup-content shadow p-3 mb-5 bg-white rounded">
                  <div className="signup-form ">
                    <h2 className="form-title">Sign up</h2>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group mt-4">
                            <label htmlFor="name">
                            <i className="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInputs} placeholder="Your Name"/>

                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="email">
                            <i className="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off "   value={user.email} 
                            onChange={handleInputs} placeholder="Your Email"/>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="phone">
                            <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                            </label>
                            <input type="number" name="phone" id="phone" autoComplete="off "  value={user.phone} 
                            onChange={handleInputs}  placeholder="Your Phone "/>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="work">
                            <i className="zmdi zmdi-slideshow material-icons-name"></i>
                            </label>
                            <input type="text" name="work" id="work" autoComplete="off "  value={user.work} 
                            onChange={handleInputs}  placeholder="Your Work"/>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password">
                            <i className="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off "  value={user.password} 
                            onChange={handleInputs}  placeholder="Your Password"/>
                        </div>
                        <div className="form-group mt-4 ">
                            <label htmlFor="cpassword">
                            <i className="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="cpassword" id="cpassword" autoComplete="off "  value={user.cpassword} 
                            onChange={handleInputs}  placeholder=" Confirm Your Password"/>
                        </div>
                        <div className="form-group form-button  mt-4  col">
                            <input type="button" name="signup" id="signup" className="form-submit btn btn-primary" value="register" onClick={PostData}></input>
                        </div>
                    </form>
                    </div>
                    <div className="signup-image ">
                        <figure>
                            <img src={signin} alt="registratiion pic" className="image img"></img>
                        </figure>
                        <NavLink to="/login" className="signup-image-link fw-bold ">I am already register</NavLink>
                    </div>
                </div>
            </div>
           
        </section>
    )
}
export default Signup;
