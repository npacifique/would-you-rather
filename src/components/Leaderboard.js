import React, { Component } from "react"
import {connect} from 'react-redux'
import Card from './shared/Card'
import Helper from '../utils/helper'


class Leaderboard extends Component {
	constructor(props){
		super(props)

		this.state ={
			answered: {}, 
			created : {}
		}
	
	}

	
	render() {

		const {questionIds, userIds, questions, users } = this.props
		
		const loadBoardUsers = Helper.loaderBoard(questions, questionIds, userIds)
		
		return (
			<div>
				{loadBoardUsers.map((user, i) =>(
				<div key={i}>
					<Card author={users[Object.keys(user)[0]]}>
						<div style={{display: "flex", justifyContent : "space-between"}}>
						
							<div style={{flex: "auto", padding : "0px 12px"}}>
								<h3>{Object.keys(user)[0]}</h3>
								<div>
									<div className="flex-row status-display"><span>Answered questions</span><span>{user.answer}</span></div>
									<div className="flex-row status-display"><span>Created questions</span><span>{user.created}</span></div>
								</div>
							</div>
							<div className="score-wrapper" >
								<div className="score-area-title">Score</div>
								<div className="score">{user.score}</div>
							</div>
						
						</div>
					
						
					</Card>
					<br />
				</div>
				) )}
			</div>
		)
	}
}

const mapStateToProps = ({users, questions})=>{
	
	return {
		userIds : Object.keys(users),
		questionIds : Object.keys(questions),
		questions, 
		users

	}
}

export default connect(mapStateToProps) (Leaderboard)




