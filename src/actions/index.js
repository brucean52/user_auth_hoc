import types from './types';

export function switchAuth(auth){
    return{
        type: types.SWITCH_AUTH,
        auth: auth
    }
}