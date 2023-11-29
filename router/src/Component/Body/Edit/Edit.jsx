import React, { useEffect, useState } from 'react';
import './Edit.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee } from '../../../../controller';

const About = () => {
  const {id}=useParams()
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
    Photo:""


  })
console.log(id);

////Data getting to input fields

const getDatas=async()=>{
  const res=await axios.get(`http://localhost:3002/api/getdetails/${id}`)
  if(res.status==200)
  {
    setval(res.data)
  }
  
}

useEffect(()=>{
  getDatas()
},[])
console.log("name",val );




 //////Display data
 const getData=(e)=>{
  setval((pre)=>({...pre,[e.target.name]:e.target.value}))
 
}


/////upload data
const upload=async(e)=>{
  Photo=await convertToBase64(e.target.files[0]);
   setval((pre)=>({...pre,Photo:Photo}))


}


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


 
const editEmployee=async(e)=>{
  e.preventDefault()
  console.log(val);
  const res=await axios.patch(`http://localhost:3002/api/editemployee/${id}`,{...val})
if(res.status!=200){
  console.log(res.status);
  alert("Data not Edited")
}
else{
  alert("Data Edited")
  navigate("/")
}
}






  return (
    <div>

<div className="container emp-profile">
      <form action='' onSubmit={editEmployee}>
        <div className="row data">
          <div className="col-md-8 details">

            <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" value={val.name} onChange={getData}   placeholder="Enter your name" />
            <br></br>


            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" value={val.email} onChange={getData}  placeholder="Enter your email" />
            <br></br>

            <label htmlFor="empId">Emp Id :</label>
            <input type="text" id="empId" name="empId"   value={val.empId} onChange={getData}  placeholder="Enter your employee ID" />
            <br></br>

            <label htmlFor="phone">Phone :</label>
            <input type="text" id="phone" name="phone"  value={val.phone} onChange={getData}  placeholder="Enter your phone number" />
            <br></br>

            <label htmlFor="designation">Designation :</label>
            <input type="text" id="designation" name="designation" value={val.designation} onChange={getData}  placeholder="Enter your designation" />
            <br></br>

            <label htmlFor="salary">Salary :</label>
            <input type="text" id="salary" name="salary" value={val.salary} onChange={getData}  placeholder="Enter your salary" />
            <br></br>

            <label htmlFor="salary">Experience :</label>
            <input type="text" id="salary" name="experience" value={val.experience} onChange={getData}  placeholder="Enter your experience" />
            <br></br>

            <label htmlFor="address">Address :</label>
            <input type="text" id="address" name="address" value={val.address} onChange={getData}  placeholder="Enter your address" />



            <div className='Sumbtn'><button>Submit</button></div>
          </div>
          <div className="col-md-4 ">
          <div className="profile-img">
              <img
                src={val.Photo}
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" onChange={upload}/>
              </div>
            </div> 
           <div className='Regi-text'><h5></h5></div>   
          </div>
        </div>
      </form>
    </div>


    </div>
  );
};

export default About;
