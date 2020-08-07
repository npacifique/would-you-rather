import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {handleLogOut} from '../actions/login'
import {withRouter} from 'react-router-dom'



class Header extends Component{
    constructor(props){
        super(props)
        this.handleUserLogOut = this.handleUserLogOut.bind(this)
    }

    handleUserLogOut(){
        this.props.dispatch(handleLogOut())
        window.location.reload()
    }


    render(){
        return(
            <div className="nav">     
                    {this.props.login.loggedIn && (<ul>
                        <NavLink to="/" className="navLink" activeClassName="selected" exact>Home</NavLink>
                        <NavLink to="/add" className="navLink" activeClassName="selected">Add Question</NavLink>
                        <NavLink to="/leaderboard" className="navLink" activeClassName="selected">Leader Board</NavLink>
                        
                        <div className="userInfo">
                            <div style={{backgroundImage : `url(${this.props.login.user.avatarURL})`, backgroundSize : "cover"}} className="avatar-img"></div>
                            <div>
                                {this.props.login.user.id}
                            </div>
                        </div>
                        
                        <NavLink onClick={this.handleUserLogOut} to="/" className="navLink">Logout</NavLink>
                    </ul>)}
                    
                <div className="hr" />
            </div>

        )
    }
}

const mapStateToProps = ({login})=>{
    return{
        login
    }
}


export default withRouter(connect(mapStateToProps) (Header))


