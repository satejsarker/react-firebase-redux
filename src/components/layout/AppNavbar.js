import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
class AppNavbar extends PureComponent {
  state = {
    isAuthenticated: false
  }

  static getDerivedStateFromProps(Props, State) {
    const { auth } = Props;
    if (auth.uid) {
      return { isAuthenticated: true }
    } else {
      return { isAuthenticated: false }
    }
  }

  onLogOutClick=e=>{
    e.preventDefault();
    const{firebase}=this.props;
    firebase.logout();
  }
  render() {
    const { isAuthenticated } = this.state;
    const {auth}=this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary md-4">
        <div className="container">

          <Link to='/' className="navbar-brand">
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
     {isAuthenticated ? (
                <li className="nav-item">
                  <Link to='/' className='nav-link'>
                    DashBord
       </Link>
                </li>
              ) : null}

            </ul>

            {isAuthenticated ? (
              <ul className='navbar-nav al-auto'>
                <li className='nav-item'>
                  <a href="#!" className="nav-link">

                  {auth.email}
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="#!" className="nav-link" onClick={this.onLogOutClick}>

                  Logout
                  </a>
                </li>


              </ul>
            ) : null}
          </div>
        </div>

      </nav>
    )
  }
}

AppNavbar.propType = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(AppNavbar);