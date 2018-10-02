
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
import {firebaseConnect} from  'react-redux-firebase';

import React, { Component } from 'react'
class Login extends Component {
  state={
    email:'',
    password:''
  }
  onChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })

     
      }

  onSubmit=(e)=>{
        console.log('firebase login ');
        e.preventDefault();
        const {firebase}=this.props;
        const {email,password}=this.state;
        console.log(email);
        firebase.login({
          email,
          password,
        }).catch(err=>alert('Invalid Login  Credentials'))
  }
  render() {
    return (
      <div className='row'> 
        <div className="col-md-6 mx-auto">
        <div className="card">
        <div className="card-body">
        <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                <i className="fas fa-lock"></i>
                   Login
                </span>
        
        </h1>

        <form  onSubmit={this.onSubmit}>

            <div className="form-group">
            <label htmlFor="email">Email</label>

            <input type="email" name='email'  required value={this.state.email} 
            
            onChange={this.onChange}
            className="form-control"/>
            </div>

            <div className="form-group">
            <label htmlFor="password">Password</label>

            <input type="password" name='password'  required value={this.state.password} 
            
            onChange={this.onChange}
            className="form-control"/>
            </div>
          <input type="submit" value='Login' className="btn btn-primary btn-block"/>
        </form>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

Login.propType={
    firebase:PropTypes.object.isRequired
}

export default firebaseConnect()(Login);
