import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Loader from 'react-loader-spinner';
import classnames from 'classnames';

class ClientDetails extends PureComponent {

    state={
        showBalanceUpdate:false,
        balanceUpdateAmount:''
    }

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    balanceSubmit=(e)=>{
        e.preventDefault();
       const {client,firestore}=this.props;

       const {balanceUpdateAmount}=this.state;
       const clientUpdate={
           balance:parseFloat (balanceUpdateAmount)
       }

       firestore.update({collection:'clients',doc:client.id},clientUpdate)
    }

    ///delete

    onDelete=e=>{
        e.preventDefault();
        const {client,firestore,history}=this.props;
        firestore.delete({
            collection:'clients',doc:client.id
        }).then(history.push('/'))
    }
    render() {

        const { client } = this.props;
        const {showBalanceUpdate,balanceUpdateAmount}=this.state;
        let balanceForm='';
        if(showBalanceUpdate){
            balanceForm=(
            <form onSubmit={this.balanceSubmit}>
                <div className="input-group">
                        <input type="text"
                        name="balanceUpdateAmount"
                        placeholder='Add new balance '
                        className="form-control"
                        onChange={this.onChange}
                        value={balanceUpdateAmount}
                        />

                        <div className="input-group-append">
                        <input type="submit" value='submit' className="btn btn-outline-dark"/>
                        </div>
                </div>
            </form>
            )
        }
        else
        {
            balanceForm=null;
        }
        if (client) {
            return (
                <div>
                    <div className="row">

                        <div className="col-md-6">
                            <Link to='/' className='btn btn-link'>
                                <i className="fas fa-arrow-left"></i>Back to DashBord</Link>

                        </div>
                        <div className="col-md-6">
                            <div className="btn-group float-right">

                                <Link to={`/client/edit/${client.id}`} className='btn btn-dark' >
                                    Edit
                                    </Link>
                                <button className="btn btn-danger"  onClick={this.onDelete}>Delete</button>
                            </div>
                        </div></div>


                    <hr />

                    <div className="card">
                        <h3 className="card-header">
                            {client.firstName} {client.lastName}
                        </h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 col-sm-6">

                                    <h4>Client Id: {' '} <span className="text-secondary">{client.id}</span> </h4></div>
                                <div className="text-secondary">
                                    <h3 className='pull-right'>
                                        Balance:
                                         
                                         <span className={classnames({
                                                'text-danger':client.balance > 0,
                                                'text-success':client.balance===0 

                                        })}>${parseFloat(client.balance).toFixed(2)}</span> <small>
                                        <a href="#!"onClick={()=>this.setState({
                                            showBalanceUpdate:!this.state.showBalanceUpdate
                                        })} >
                                        <i className="fas fa-pencil-alt"></i>
                                        </a>

                                </small>

                                    </h3>
                                           {balanceForm}     

                                    
                                    
                                    {/* balance form  */}
                                </div>
                            </div>

                            <hr />
                            <ul className="list-group">
                                <li className="list-group-item">
                                    client Email:{client.email}

                                </li>
                                <li className="list-group-item">

                                    Phone : {client.phone}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
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


ClientDetails.propTypes={
    firestore:PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'clients', storeAs: 'client', doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        client: ordered.client && ordered.client[0]
    }))
)(ClientDetails);