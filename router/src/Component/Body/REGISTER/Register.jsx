import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
  let Photo="";
  const [val,setval]=useState({
    name:"",
    email:"",
    empId:"",
    phone:"",
    designation:"",
    experience:"",
    salary:"",
    address:"",



  })

  /////Display data
  const registerdata=async(e)=>{
    e.preventDefault();
    // console.log(e);
    console.log({...val});
    console.log(Photo);



  const res=await axios.post("http://localhost:3002/api/addtask",{...val,Photo:Photo})
   console.log(res.status);
  if(res.status!==201){
    alert("Data not  added")
  }
 else{
  alert("Data  added")
  navigate("/")
 }
  
    



  }
    //////Display data
    const getData=(e)=>{
      setval((pre)=>({...pre,[e.target.name]:e.target.value}))
     
    }




 /////upload data
  const upload=async(e)=>{
    Photo=await convertToBase64(e.target.files[0]);
    // console.log(Photo);

  }




  //  bay64 

   function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
  }
})
}












  return (
    <div className="container emp-profile">
      <form action='' onSubmit={registerdata}>
        <div className="row data">
          <div className="col-md-8 details">

            <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" onChange={getData}  placeholder="Enter your name" />
            <br></br>


            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" onChange={getData} placeholder="Enter your email" />
            <br></br>

            <label htmlFor="empId">Emp Id :</label>
            <input type="text" id="empId" name="empId" onChange={getData} placeholder="Enter your employee ID" />
            <br></br>

            <label htmlFor="phone">Phone :</label>
            <input type="text" id="phone" name="phone" onChange={getData} placeholder="Enter your phone number" />
            <br></br>

            <label htmlFor="designation">Designation :</label>
            <input type="text" id="designation" name="designation" onChange={getData} placeholder="Enter your designation" />
            <br></br>

            <label htmlFor="salary">Salary :</label>
            <input type="text" id="salary" name="salary" onChange={getData} placeholder="Enter your salary" />
            <br></br>

            <label htmlFor="salary">Experience :</label>
            <input type="text" id="salary" name="experience" onChange={getData} placeholder="Enter your experience" />
            <br></br>

            <label htmlFor="address">Address :</label>
            <input type="text" id="address" name="address" onChange={getData} placeholder="Enter your address" />

            <div className='Sumbtn'><button>Submit</button></div>
          </div>


          <div className="col-md-4 ">
            <div className="profile-img">
              <img
                src="../public/icons_379085.svg"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" onChange={upload} />
              </div>
            </div>
            <div className='Regi-text'><h5>Registration<h3>Form</h3></h5></div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Register;