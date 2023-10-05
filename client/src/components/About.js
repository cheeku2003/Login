import React, { useEffect,useState } from "react";
import dp from "../images/dp.jpg";
import { useNavigate } from "react-router-dom";
import aboutpic from "../images/aboutpic.png";
const About=()=>
{
    const navigate=useNavigate();
    const [userData , setUserData]=useState({});
    const callAboutPage= async () =>
    {
        try{
           const res = await fetch("/about",
        {
            method:"GET",
            headers: {
                Accept: "application/json",
              "Content-Type":"application/json",
          },
credentials: "same-origin",

        });
   
        const data =await res.json();
        console.log(data);
        console.log(userData);
          setUserData(data);
        if(!res.status===200)
        {
            const error= new Error(res.error);
            throw error;
        }
        }
        catch (err){
console.log(err);
navigate("/login");
        }
        
    }
    useEffect(()=>
    {
        callAboutPage();
    });
   
    return (
       <>
        <div className="contact_form_container py-5 shadow p-3 mb-5 bg-white rounded mt-5 emp">
<div className="container emp-profile">
    <form method = "GET">
        <div className="row">
            <div className="col-md-4">
            <div className="profile-img">
            <img src={userData.name ===" aditya" ? dp : aboutpic } alt="thapa" className="dp" />

            </div>   
            </div>
            <div className="col-md-6">
          <div className="profile-head">
            <h5> {userData.name}</h5>
            <h6>{userData.work}</h6>
            <p className="profile-rating mt-3 mb-5">RANKINGS:<span>1/10</span></p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="about-tab" data-bs-toggle="tab" href="#about" role="tab">About</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="timeline-tab" data-bs-toggle="tab" href="#timeline" role="tab">Timeline</a>
  </li>
</ul>
          </div>
            </div>
            <div className="col-md-2">
                <input type="submit" className="profile-edit-btn" name=" btnAddMore" value="Edit profile"></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="profile-work">
                    <p>WORK LINK</p>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">YouTube</a><br/>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">Instagram</a><br/>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">Thapa Technical</a><br/>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">WebsiteGitHubMERN Dev</a><br/>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">Web Developer</a><br/>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">Figma</a><br/>
                    <a href="https://www.youtube.com/watch?v=kHEhhV3EyPU&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=27&t=312s" target="_thapa">Software Engineer</a><br/>
                </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
    <div className="row mt-2">
        <div className="col-md-6">
            <label>User Id</label>
        </div>
        <div className="col-md-6">
           8798798889899
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Name</label>
        </div>
        <div className="col-md-6">
           <p>{userData.name}</p>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Email</label>
        </div>
        <div className="col-md-6">
           <p>{userData.email}</p>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Phone</label>
        </div>
        <div className="col-md-6">
           <p>{userData.phone}</p>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Professional</label>
        </div>
        <div className="col-md-6">
            Web Developer
        </div>
    </div>
    </div>
    <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">
      <div className="row mt-2">
        <div className="col-md-6">
            <label>Experience</label>
        </div>
        <div className="col-md-6">
            Expert
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Hourly Rate</label>
        </div>
        <div className="col-md-6">
            10$/hr
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Total Projects</label>
        </div>
        <div className="col-md-6">
            230
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>English Level</label>
        </div>
        <div className="col-md-6">
            Expert
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-6">
            <label>Availability</label>
        </div>
        <div className="col-md-6">
            8 months
        </div>
    </div>
      </div>
    </div>
  </div>
</div>     
        
    </form>
</div>
        </div>
       </>
    )
}
export default About;