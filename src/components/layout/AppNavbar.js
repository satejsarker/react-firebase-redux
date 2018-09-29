import React, { PureComponent } from 'react'
import {Link } from 'react-router-dom'
 class AppNavbar extends PureComponent {
  render() {
    return (
     <nav className="navbar navbar-expand-md navbar-dark bg-primary md-4">
     <div className="container">
     
     <Link  to='/' className="navbar-brand">
ClintPanel

     </Link>
     <button 
     type="button"
     data-toggle="collapse"
     data-target='#navbarMain'
    
     className="navbar-toggler">
     <span className="navbar-toggler-icon"></span>
     
     </button>

     <div className="collapse navbar-collapse" id="navbarMain">
     <ul className="navbar-nav mr-auto">
     <li className="nav-item">
     <Link to='/' className='nav-link'>
     DashBord
     </Link>
     </li>
     </ul>  
     </div>
     </div>
     
     </nav>
    )
  }
}

export default AppNavbar;