import { DISABLE_BALANCE_ON_ADD,DISABLE_BALANCE_ON_EDIT,ALLOW_REGISTRATION } from "../actions/types";

//initial state



export default function(state={},action){
    switch(action.type){
        case DISABLE_BALANCE_ON_ADD:
        return {
            ...state,
            disibaleBalanceOnAdd:action.payload,
            
        }
        case DISABLE_BALANCE_ON_EDIT:
        return {
            ...state,
            disableNalanceOnEdit:action.payload
        };

        case ALLOW_REGISTRATION:
        return {
            ...state,
            allowRegistration:action.payload
        }

        default:
        return state;
    }
}