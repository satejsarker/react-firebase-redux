import { DISABLE_BALANCE_ON_ADD,DISABLE_BALANCE_ON_EDIT,ALLOW_REGISTRATION } from "./types";


export const setDisibalBalanceOnAdd=()=>{

    //get settings from local storage

    const settings=JSON.parse(localStorage.getItem('settings'));

    settings.disibaleBalanceOnAdd=!settings.disibaleBalanceOnAdd;

    localStorage.setItem('settings',JSON.stringify(settings));

        return {
            type:DISABLE_BALANCE_ON_ADD,
            payload:settings.disibaleBalanceOnAdd
        }
}

export const setDisibalBalanceOnEdit=()=>{

    const settings=JSON.parse(localStorage.getItem('settings'));

    settings.disableNalanceOnEdit=!settings.disableNalanceOnEdit;

    localStorage.setItem('settings',JSON.stringify(settings));

        return {
            type:DISABLE_BALANCE_ON_EDIT,
            payload:settings.disableNalanceOnEdit
        }
    
}
export const setAllowResgistration=()=>{
    const settings=JSON.parse(localStorage.getItem('settings'));
    console.log('hiited allow ')

    settings.allowRegistration=!settings.allowRegistration;

    localStorage.setItem('settings',JSON.stringify(settings));

        return {
            type:ALLOW_REGISTRATION,
            payload:settings.allowRegistration
        }
   
}