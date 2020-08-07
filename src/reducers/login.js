import {IS_LOGGED_IN, IS_LOGGED_OUT} from '../actions/login'
import Auth from '../authentication/Auth'

const defaultState = Auth.isLoggedIn()

export default function login(state = defaultState, action){
    switch (action.type) {
        case IS_LOGGED_IN:
            return state = action.cookie
        case IS_LOGGED_OUT:
            return state = {...state, loggedIn : !state.loggedIn }
        default:
            return state;
    }
}