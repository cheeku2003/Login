import React , { useEffect, useState }from "react";
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";

const Contact=()=>
{
    
    const [userData, setUserData]= useState({name:"", email:"", phone:"" , message:"  "});
    const userContact= async () =>
    {
        try{
           const res = await fetch("/getdata",
        {
            method:"GET",
            headers: {
              "Content-Type":"application/json",
          },
        });
   
        const data =await res.json();
        console.log(data);
setUserData({...userData ,name:data.name,email:data.email,phone:data.phone });
        if(!res.status===200)
        {
            const error= new Error(res.error);
            throw error;
        }
        }
        catch (err){
console.log(err);

        }
        
    }
    useEffect(()=>
    {
        userContact();
    });
      
    const [typedMessage, setTypedMessage] = useState("");
    //we are storing data in states
    const handleInputs =(e)=>
    {
        const {name , value } =e.target;
        //const name =e.target.name;
       // const value=e.target.value;
       if(name==="message")
       {
        setTypedMessage(value);
       }
else {
        setUserData({...userData ,[name]:value});
}
    };
//send the data to backend
const contactForm=async(e)=>
{
    e.preventDefault();
    const {name,email,phone }=userData;
    const message = typedMessage;
const res =await  fetch("/contact",
{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify({
        name,email,phone, message
    })

})
const data =await res.json();
if(!data)
{
    console.log("message is not sent");
}
else 
{
    alert("Message Send");
    setUserData({...userData, message: ""})
}
}
    return (
      <>
        <div className="contact_info mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between contact">
                        <div className="contact_info_item border border-2 rounded d-flex">
                         <img src={phone} alt="phone" className="icon mt-2"/>
                         <div className="contact_info_content mt-2">
                            <div className="class_info_title ">
                              Phone  
                            </div>
                            <div className="class_info_text">
                              +918059482616
                            </div>
                         </div>  
                        </div>
                        <div className="contact_info_item border border-2 rounded d-flex justify-content-start ">
                         <img src={email} alt="phone" className="icone mt-2"/>
                         <div className="contact_info_content mt-2">
                            <div className="class_info_title ">
                             Email
                            </div>
                            <div className="class_info_text">
                              adityashukla5412@gmail.com
                            </div>
                         </div>  
                        </div>
                        <div className="contact_info_item  border border-2 rounded d-flex justify-content-start ">
                         <img src={address} alt="phone" className="icona mt-2"/>
                         <div className="contact_info_content mt-2 ">
                            <div className="class_info_title ">
                             Address  
                            </div>
                            <div className="class_info_text">
                            Jagadhri, Haryana , India 
                            </div>
                         </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact_form mt-5">
            <div className="container">
                <div className="row">
                    <div className="contact_form_container py-5 shadow p-3 mb-5 bg-white rounded">
                        <div className="contact_form_title">
                           Get in Touch 
                           <form method="POST" id="contact_form ">
<div className="contact_form_name d-flex justify-content-between align-itmes-between mt-3">
 <input type="text" id="contact_form_name" className=" border border-2 rounded contact_form_name input_field " name="name" value={userData.name} onChange={handleInputs} placeholder="Your name" required="true" ></input>
 <input type="email" id="contact_form_email" className="border border-2 rounded contact_form_email input_field" name="email" value={userData.email} onChange={handleInputs} placeholder="Your email" required="true"></input>
 <input type="number" id="contact_form_number" className=" border border-2 rounded contact_form_number input_field" name="phone" value={userData.phone}  onChange={handleInputs} placeholder="Your Phone " required="true"></input>
</div>
<div className="contact_form_text mt-5 ">
    <textarea key="message" className="border border-2 rounded text_field contact_form_message" name="message"  value={typedMessage} onChange={handleInputs} placeholder="message" cols="30" rows="10"></textarea>
</div>
<div className=" contact_form_button">
    <button type="submit" className=" rounded button contact_submit_button btn btn-primary "  inputMode="none" onClick={contactForm}>Send Message</button>
</div>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}
export default Contact;