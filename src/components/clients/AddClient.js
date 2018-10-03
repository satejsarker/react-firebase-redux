import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
class AddClient extends Component {

    state={
        firstName:'',
        lastName:'',
        email:'',
        balance:'',
        phone:''
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        const newClient=this.state;
        const {firestore,history}=this.props;

        //if no balance make zero 0

        if(newClient.balance===''){
            newClient.balance=0;
        }
        firestore.add({collection:'clients'},newClient).then(()=>{
            history.push('/');
        })
    }
  render() {
      const {disibaleBalanceOnAdd}=this.props.settings;
    return (
      <div>
        <div className="row">
        
        <div className="col-md-6">
        <Link to ='/' className='btn btn-link'>
      <i className="fas fa-arrow-left"></i>Back to DashBord</Link>
        
        </div></div>

        <div className="card">
        <div className="card-header">Add Client</div>

        <div className="card-body">
        <form action="" onSubmit={this.onSubmit}>
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text"
            name='firstName'
            minLength='2'
            required
            value={this.state.firstName}
            onChange={this.onChange}            className="form-control"/>
            
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text"
            name='lastName'
            minLength='2'
            required
            value={this.state.lastName}
            onChange={this.onChange}            className="form-control"/>
            
            </div>


              <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="text"
            name='email'
        
            value={this.state.email}
            onChange={this.onChange}            className="form-control"/>
            
            </div>
            <div className="form-group">
            <label htmlFor="balance">Balance</label>
            <input type="text"
            name='balance'
            disabled={disibaleBalanceOnAdd}
            value={this.state.balance}
            onChange={this.onChange}            className="form-control"/>
            
            </div>

 <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input type="text"
            name='phone'
        
            value={this.state.phone}
            onChange={this.onChange}            className="form-control"/>
            
            </div>
            <input type="submit"  value='Submit' className="btn btn-primary btn-block"/>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

AddClient.propsType={
    firestore:PropTypes.object.isRequired,
    settings:PropTypes.object.isRequired
}

export default  compose(
    firestoreConnect(),
    connect((state,props)=>({
            settings:state.settings
    }))
)(AddClient);
