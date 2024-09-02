import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from "./ReduxConstant";

export const loginSucess = (user)=>({
    type : LOGIN_SUCCESS,
    payload : user,
})

export const registerSucess = (user)=>({
    type : REGISTER_SUCCESS,
    payload : user,
})

export const logOut = ()=>({
    type : LOGOUT,
    payload : null,
})