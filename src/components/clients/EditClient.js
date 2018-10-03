
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Loader from 'react-loader-spinner';


import React, { Component } from 'react'

 class EditClient extends Component {
     constructor(props){
         super(props);
         //crate ref

         this.firstNameInput=React.createRef();
         this.lastNameInput=React.createRef();
         this.emailInput=React.createRef();
         this.balanceInput=React.createRef();
         this.phoneInput=React.createRef();
        
     } 
     onSubmit=(e)=>{
         e.preventDefault();

         const{client,firestore,history}=this.props;

         //updated client

         const updClient={
             firstName:this.firstNameInput.current.value,
             lastName:this.lastNameInput.current.value,
             email:this.emailInput.current.value,
             phone:this.phoneInput.current.value,
             balance:this.balanceInput.current.value===''?0:this.balanceInput.current.value
         }

         //update in firestore

         firestore.update({

            collection:'clients',doc:client.id
         },updClient).then(history.push('/'))

     }
  render() {
      const {client}=this.props;
        const {disableNalanceOnEdit}=this.props.settings;
   if(client){
       return (
        //    defaultValue is used for editing for read only value from client  
        <div>
        <div className="row">
        
        <div className="col-md-6">
        <Link to ='/' className='btn btn-link'>
      <i className="fas fa-arrow-left"></i>Back to DashBord</Link>
        
        </div></div>

        <div className="card">
        <div className="card-header">Edit Client</div>

        <div className="card-body">
        <form action="" onSubmit={this.onSubmit}>
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text"
            name='firstName'
            minLength='2'
            required
            ref={this.firstNameInput}
            defaultValue={client.firstName}
                 className="form-control"/>
            
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text"
            name='lastName'
            minLength='2'
            required
            ref={this.lastNameInput}
            defaultValue={client.lastName}
                 className="form-control"/>
            
            </div>


              <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="text"
            name='email'
            ref={this.emailInput}
            defaultValue={client.email}
                 className="form-control"/>
            
            </div>
            <div className="form-group">
            <label htmlFor="balance">Balance</label>
            <input type="text"
            name='balance'
            disabled={disableNalanceOnEdit}
            ref={this.balanceInput}
            defaultValue={client.balance}
                 className="form-control"/>
            
            </div>

 <div className="form-group">
            <label htmlFor="phone">phone</label>
            <input type="text"
            name='phone'
            ref={this.phoneInput}
            defaultValue={client.phone}
                 className="form-control"/>
            
            </div>
            <input type="submit"  defaultValue='Submit' className="btn btn-primary btn-block"/>
        </form>
        </div>
        </div>
      </div>
       )
   }
   else{
       return(
        <Loader style={{ margin: 'auto', display: 'block' }}
        type="Rings"
        color="#007bff"
        height="200"
        width='1000'
        margin='auto'
    />
       )
   }
  }
}



EditClient.propTypes={
    firestore:PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'clients', storeAs: 'client', doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } ,settings}, props) => ({
        client: ordered.client && ordered.client[0],
        settings:settings
    }))
)(EditClient);