import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Loader from 'react-loader-spinner';
 class Clients extends PureComponent {
   state={
     totalOwed:null
   }
   static getDerivedStateFromProps(props,  ){
      const {clients}= props;
     
      if(clients){
        const total=clients.reduce((total,client)=>{
          return total+ parseFloat(client.balance.toString());
        },0);


        return {totalOwed:total}
      }
      else{
        return null;
      }
      
   }
  render() {
    const totalOwed=this.state.totalOwed
    const {clients}=this.props;
    if(clients){
return ( <div >
    <div className="row">
    <div className="col-md-6">
    <h1>
      {' '}
        <i className="fas fa-users"></i> Clients

    </h1>
    </div>
    <div className="col-md-6">
    <h5 className="text-right text-secondary">
    <span className="text-success">
    Total Owed :</span>{' '}
    <span className="text-primary">
    ${parseFloat(totalOwed).toFixed(2)}
    </span>
    </h5>
    </div>
    </div>


    <table className="table table-striped">
    <thead className="thead-inverse">
    <tr>

      <th>Name</th>
      <th>Email</th>
      <th>Balance</th>
    </tr>
    
    </thead>
    
<tbody>
    {clients.map(client=>(

      <tr key={client.id}>
        <td>{client.firstName} {client.lastName}</td>
        <td>{client.email}</td>
          <td> $ {
            parseFloat(client.balance).toFixed(2)
          } </td>
          <td>
            <Link to={`/client/${client.id}`} 
            className="btn btn-secondary btn-sm"
            >
            <i className="fas fa-arrow-circle-right">
            Detais</i> 

            </Link>
            
            </td> 
      </tr>
    ))}
  </tbody>
    </table>
  </div>
)
    }else{
      return (
        <Loader style={{margin:'auto',display:'block'}}
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



Clients.propTypes={
  firestore:PropTypes.object.isRequired,
  clients:PropTypes.array
}


export default compose(
  firestoreConnect([{
    collection:'clients'
  }]),
  connect((state,props)=>({
    clients: state.firestore.ordered.clients
  }))
)(Clients)