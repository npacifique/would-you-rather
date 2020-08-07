import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



/** @description Check if the user is logged in. If not logged in, Redirect to the login page */
const ProtectedRoutes = ({auth, login, dispatch, component : Component, ...rest }) => {
   
    return(
         <Route {...rest} render={()=>(
            login.loggedIn ?  (<Component dispatch={dispatch && dispatch} handleUserLogout={rest.handleUserLogout} />) :
            (<Redirect to="/login" />)
         )} />
    )
}


//map the login cookie to props
const mapStateToProps = ({login})=>{
    return{
        login
    }
}

export default connect(mapStateToProps)(ProtectedRoutes)