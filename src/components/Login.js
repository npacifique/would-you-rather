import React, { Component } from "react"
import { connect } from "react-redux"
import {handleLogin} from '../actions/login'
import {withRouter} from 'react-router-dom'

class Login extends Component {

	constructor(props){
		super(props)

		this.handleLogin = this.handleLogin.bind(this)
	}


	handleLogin(e){
		e.preventDefault()
		let {users} = this.props
		let user = users[e.target["user"].value]
		
		this.props.dispatch(handleLogin(user, users))
		this.props.history.push('/')

	
	}

	render() {
		const users = Object.keys(this.props.users)
		return (
			<div className="login-page">
			<div className="">
				<div className="form-header">
					<h3>Welcome to the Would You Rather App!</h3>
					<p>Please sing in to continue</p>
				</div>

				<div className="formContainer">
					<div className="login-info-label">Sing in</div>
					<form
						onSubmit={(e) => {
							this.handleLogin(e)
						}}
					>
						<select id="users" name="user">
							{users.map((user, index) => {
								return (
									<option key={index} value={user}>
										{user}
									</option>
								)
							})}
							
						</select>
						<span className="loginError"></span>
						<button>Sing in</button>
					</form>
				</div>
			</div>
			</div>
		)
	}
}

const mapStateToProps = ({users}) => {
	return {
		users
	}
}

export default withRouter(connect(mapStateToProps)(Login))
