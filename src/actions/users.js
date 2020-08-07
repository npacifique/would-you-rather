import  * as API from '../_DATA'

export const GET_USERS = 'GET_USERS'


export function getUsers(users){
    return{
        type : GET_USERS,
        users
    }
} 


export function handleGetUser(){
    return (dispatch)=>{
        return API._getUsers().then(data=>{
            dispatch(getUsers(data))
        })

    }
}