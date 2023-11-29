import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {

 //// get emp
  const [count,setCount]=useState(0)
  const [getEmp,SetEmp]=useState([])
  const getEmployee=async()=>{
    const res=await axios.get("http://localhost:3002/api/gettask")
    SetEmp(res.data)
  }
 




 ///// Delete
   
  const deleteEmp = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");

    if (isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:3002/api//deltask/${id}`);
        console.log('Employee deleted:', res.data);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    } else {
      console.log('Deletion cancelled.');
    }
    setCount(count+1)
}

useEffect(()=>{
  getEmployee()
},[count])

/////// Edit

  return (
    <div>
           <table className='tablemain'>
    <thead>
      <tr>
        <th className='id'>User ID</th>
        <th className='username'>Username</th>
        <th className='action'>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
      getEmp.map((data,index)=>
        <tr key={index}>
        <td>{data.empId}</td>
        <td>{data.name}</td>
        <td>
          <Link to={`/view/${data._id}`}><button className="view-btn">View</button></Link>
          <Link to={`/edit/${data._id}`} ><button className="edit-btn">Edit</button></Link>
          <Link className='delete-btn' to={`#${data._id}`} onClick={() => deleteEmp(data._id)}>Delete</Link>
          
        </td>
      </tr>
      )
     }


     
    
    </tbody>
  </table>
    </div>
  )
 
}

export default Home
