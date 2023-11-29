import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>




 
 <div className="main-section">
        <h3>REACT PAGE</h3>
      </div>
      <nav className ="navbar navbar-expand-lg navbar-light ">
        <div className ="container-fluid">
          <div className ="nav-gifts">Home Page</div>
          <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="collapse navbar-collapse nav-main" id="navbarNav">

            <div>
            <Link className='nav-link active' id='' to={"/"}><span>HOME</span></Link> 
            </div>
            <div>
              <Link className='nav-link active' to={"/about"}><span>ABOUT</span></Link>
            </div>
            <div>
              <a className ="nav-link active" href="#"><span>INFO</span></a>
            </div>
            <div>
              <a className ="nav-link active" href="#"><span>SHOP</span></a>
            </div>
            <div>
            <Link className='nav-link active' to={"#"}><span>CONTACT US</span></Link>
            </div>


            <div>
              <a className ="nav-link active" href="#"><span><i className ="fa fa-user" aria-hidden="true"></i></span></a>
            </div>



            <Link className='nav-link active' to={"/register"}><span>REGISTER</span></Link>

            <div><a className ="nav-link active" href="#"><span><i className ="fa fa-shopping-bag"
                    aria-hidden="true"></i></span></a></div>


            <div> <a className ="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
            </div>

           
          </div>
        </div>
      </nav>






      
    </div>
  )
}

export default Navbar
