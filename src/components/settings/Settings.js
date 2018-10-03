import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {
    setAllowResgistration,
    setDisibalBalanceOnAdd,
    setDisibalBalanceOnEdit
} from '../../actions/settingsAction';



class Settings extends Component {


allowRegistrationonChange=(e)=>{
const {setAllowResgistration}=this.props;
setAllowResgistration();
}

disableBalanceOnAddonChange=(e)=>{
        const{setDisibalBalanceOnAdd}=this.props;

            setDisibalBalanceOnAdd();
    }

disableBalanceOnEditonChange=(e)=>{
     const {setDisibalBalanceOnEdit}=this.props;

     setDisibalBalanceOnEdit()
}

setdisableo

    render() {
        const {
            disibaleBalanceOnAdd,
            disableNalanceOnEdit,
            allowRegistration
        } = this.props.settings;
        return (
            <div>
                <div className="row">
                    <div className="col md-6">
                        <Link to='/' className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i> Back to DashBord
        </Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">Edit Settings</div>

                    <div className="card-body">
                        <form >
                            <div className="form-group">
                                <label >Allow Registration</label>{'  '}

                                <input type="checkbox" name="allowRegistration" defaultChecked={!!allowRegistration}
                                    onChange={this.allowRegistrationonChange}
                                />
                            </div>
                            <div className="form-group">
                                <label >Disable Balance On Add</label>{'  '}

                                <input type="checkbox" name="disableBalanceOnAdd" defaultChecked={!!disibaleBalanceOnAdd}
                                    onChange={this.disableBalanceOnAddonChange}
                                />
                            </div>
                            <div className="form-group">
                                <label >Disable Balance On Edit</label>{'  '}

                                <input type="checkbox" name="disableBalanceOnEdit" defaultChecked={!!disableNalanceOnEdit}
                                    onChange={this.disableBalanceOnEditonChange}
                                />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisibalBalanceOnAdd: PropTypes.func.isRequired,
    setDisibalBalanceOnEdit: PropTypes.func.isRequired,
    setAllowResgistration: PropTypes.func.isRequired
}


export default connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
}), { setAllowResgistration, setDisibalBalanceOnAdd, setDisibalBalanceOnEdit })(Settings);