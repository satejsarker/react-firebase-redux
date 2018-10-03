import { NOTIFY_USER } from '../actions/types';


//innitial state

const initialState={
    message:null,
    messageType:null
}

export default function(state=initialState,aciton){
    switch(aciton.type){
        case NOTIFY_USER:
        return{
            ...state,
            message: aciton.message,
            messageType: aciton.messageType
        }

        default:
        return state;
    }
}