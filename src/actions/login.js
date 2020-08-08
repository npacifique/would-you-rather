import Auth from '../authentication/Auth'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const IS_LOGGED_IN = "IS_LOGGED_IN"
export const IS_LOGGED_OUT = "IS_LOGGED_OUT"

function login(cookie){
    return{
        type : IS_LOGGED_IN,
        cookie
    }
}


function logout(){
    return{
        type : IS_LOGGED_OUT
    }
}


export function handleLogOut(){
    return (dispatch)=>{
        dispatch(showLoading())
        Auth.logout()
        dispatch(logout())
        dispatch(hideLoading())
    }
}

export function handleLogin(user, users){

    return (dispatch)=>{
        dispatch(showLoading())
        Auth.login(user, users).then(res =>{
            let {loggedIn, user} = Auth.isLoggedIn()

            dispatch(login({loggedIn, user}))
            dispatch(hideLoading())

        }).catch(error =>{
             dispatch(login({loggedIn: false, user : {}, error}))
        })
    }
}