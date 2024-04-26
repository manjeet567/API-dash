import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  const handlelogout=(e)=>{
  window.localStorage.removeItem('user')
  navigate('/')
  }
    return ( 
        <section id="header">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h5><img src="/img/3.jpg" alt="" className="img-fluid"/></h5>
          
          <button className="btn ">
            <div className="dropdown">
              <a className="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" >
           manjeet
              </a>
            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><Link className="dropdown-item" to="/profileshow">Profile</Link></li>
                <li><Link className="dropdown-item"to="/changepassword">Change Password</Link></li>
        
                <li><Link className="dropdown-item"to="/" onClick={(e)=>{handlelogout(e)}}> <i className="bi bi-box-arrow-right"></i>Logout</Link></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
    </section>
     );
}

export default Header;