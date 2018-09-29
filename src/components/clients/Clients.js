import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
 class Clients extends PureComponent {
  render() {
    const clients=[
      {
      id:'1234',
      firstName:'satej',
      lastName:'sarker',
      email:'satej@email.com',
      phone:'444-4444-222',
      balance:'40'
    },
     {
       id: '12',
       firstName: 'samir',
       lastName: 'sarker',
       email: 'samir@email.com',
       phone: '4234-442344-222',
       balance: '33.2323'
     }
  ];
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
          < td > $ {
            parseFloat(client.balance).toFixed(2)
          } < /td>
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
      return <h1>Loding...</h1>
    }
    
  }
}
export default Clients;