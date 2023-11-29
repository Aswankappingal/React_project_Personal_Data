import React, { useEffect } from 'react'
import './View.css'
import { useParams} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


const View = () => {
  const {id}=useParams()
  console.log(id);
  const [getview,setView]=useState([])
  const getViewer = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3002/api/getdetails/${id}`);
      setView(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(()=>{
    getViewer(id)
  },[id]);
  return (
    <div>
      <div className="container emp-profiler">
     
         
          

          <div className="row data">
          <div className="col-md-4 ">
            <div className="profile-img">
              <img
                src={getview.Photo}
              />
              <div className="file btn btn-lg btn-primary">
                
                <input type="file" name="file" />
              </div>
            </div>
            <div className='Regi-text'><span>{getview.name}</span></div>
          </div>
          <div className="col-md-8 detailss">
          <label htmlFor="empId">Emp Id</label>
            <span id='empId'>{getview.empId}</span>
            <br></br>
              <label htmlFor="email">Email :</label>
            <span id='email'>{getview.email}</span>
            <br></br>



            <label htmlFor="phone">Phone :</label>
            <span id='phone'>{getview.phone}</span>
            <br></br>

            <label htmlFor="designation">Designation :</label>
            <span id='designation'>{getview.designation}</span>
            <br></br>

            <label htmlFor="salary">Salary :</label>
            <span id='salary'>{getview.salary}</span>
            <br></br>

            <label htmlFor="salary">Experience :</label>
            <span id='salary'>{getview.experience}</span>
            <br></br>

            <label htmlFor="address">Address :</label>
            <span id='address'>{getview.address}</span>

       
          </div>




        </div>

       
         
       
      </div>






    </div>
  )
}

export default View

