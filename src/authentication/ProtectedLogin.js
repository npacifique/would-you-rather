import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



/** @description Redirect to /dashboard when user is logged in */
const ProtectedLogin = ({ login, component : Component, ...rest }) => {  

    return(
         <Route {...rest} render={()=>(
            !login.loggedIn ?  
            (<Component handleUserLogin={rest.handleUserLogin}/>) :
            (<Redirect to="/" />)
         )} />
    )
}


const mapStateToProps = ({login})=>{
    return{
        login
    }
}

export default connect(mapStateToProps)(ProtectedLogin)