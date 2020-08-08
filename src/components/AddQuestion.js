import React, { Component } from "react"
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'



class AddQuestion extends Component {
	constructor(props){
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e, userId){
		e.preventDefault()
	
		let question ={ 
			optionOneText : e.target["optionOne"].value, 
			optionTwoText : e.target["optionTwo"].value, 
			author : userId }
					
		this.props.dispatch(handleSaveQuestion(question))

		this.props.history.push('/')

	}

	render() {
		const {userId} = this.props
		return (
			<div>
				<div className="form-header">
					<h3>Create New Question</h3>
					<p>Complete the question:</p>
				</div>

				<div className="formContainer">
					<h5>Would you rather...</h5>
					<form onSubmit={(e)=>this.handleSubmit(e, userId)} className="form">
						<input name="optionOne" type="text" required/>
						<p style={{textAlign : "center"}}>or</p>
						<input name="optionTwo" type="text" required />
						<button>Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({login})=>{
	return{
		userId : login.user.id
	}
}

export default withRouter(connect(mapStateToProps) (AddQuestion))
