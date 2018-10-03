import { NOTIFY_USER } from "./types";

export  const notifyUser=(message,messageType)=>{
    console.log('hited the notify ')
    return{
        type:NOTIFY_USER,
        message,
        messageType
    }

};

