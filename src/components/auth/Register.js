
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import React, { Component } from 'react';
import { notifyUser } from '../../actions/notifyAction';
import Alert from '../layout/Aleart';

class Register extends Component {
    componentWillMount(){
        const{allowRegistration}=this.props.settings;
        if(!allowRegistration){
            this.props.history.push('/');

        }
    }
  state = {
    email: '',
    password: ''
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })


  }

  onSubmit = (e) => {

    e.preventDefault();
    const { firebase ,notifyUser} = this.props;
    const { email, password } = this.state;


            firebase.createUser({
                email,password
            }).catch(err=>notifyUser('User is already Exsits',"error"))
    //register with firebase 
  }
  render() {
    const {message,messageType}=this.props.notify;        
    return (
      <div className='row'>
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
            {message ?(<Alert message={message} messageType={messageType}/>):null}
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock"></i>
                Register
                </span>

              </h1>

              <form onSubmit={this.onSubmit}>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input type="email" name='email' required value={this.state.email}

                    onChange={this.onChange}
                    className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>

                  <input type="password" name='password' required value={this.state.password}

                    onChange={this.onChange}
                    className="form-control" />
                </div>
                <input type="submit" value='Register' className="btn btn-primary btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propType = {
  firebase: PropTypes.object.isRequired,
  notify:PropTypes.object.isRequired,
  notifyUser:PropTypes.func.isRequired
  
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    notify: state.notify,
    settings:state.settings
  }),{notifyUser}) //action added as property 
)(Register);


/// when we have an action we have to added as property .