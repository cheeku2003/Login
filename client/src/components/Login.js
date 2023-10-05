import React ,{useContext, useState} from "react";
import loginup from "../images/loginup.jpg";
import { NavLink ,useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Login=()=>
{
  const { state , dispatch} = useContext(UserContext);
    const navigate=useNavigate();
const [email , setEmail]=useState("");
const [password , setPassword] = useState("");

const loginUser = async (e) => {
    e.preventDefault();
  
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        email,
        password
      }),
    });
  
    const data = await res.json();
  
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      dispatch ({type:"USER",payload:true})
      window.alert("Login successful");
      navigate("/");
    }
  };
  
    return (
        <>
  <section className="signup ">
            <div className="container mt-5">
                <div className="signin-content shadow p-3 mb-5 bg-white rounded">
                <div className="signup-image ">
                        <figure>
                            <img src={loginup} alt="registratiion pic" className="image imag"></img>
                        </figure>
                        <NavLink to="/signup" className="signup-image-link fw-bold ">Create an Acount</NavLink>
                    </div>
                  <div className="signup-form  ">
                    <h2 className="form-title mt-5">Sign up</h2>
                    <form method="POST" className="register-form" id="register-form"> 
                        <div className="form-group mt-4">
                            <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"></i>
                            </label>
                            <input type="email" name="email" id="email" autoComplete="off " value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name="password" id="password" autoComplete="off " value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Your Password"/>
                        </div>
                        <div className="form-group form-button  mt-4  col">
                            <input type="button" name="signup" id="signup" className="form-submit btn btn-primary" value="Login" onClick={loginUser }></input>
                        </div>
                    </form>
                    </div> 
                </div>
            </div>
        </section>
        </>
    )
}
export default Login;