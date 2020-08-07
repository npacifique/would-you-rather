import React, { Component } from "react"
import {connect} from 'react-redux'
import Card from './shared/Card'
import Questions from '../utils/unanswered'

class Leaderboard extends Component {
	constructor(props){
		super(props)

		this.state ={
			answered: {}, 
			created : {}
		}
	}



	componentDidMount(){
		const {users, questions} = this.props
		const usersStates = Questions.userStatus(users,questions)

		this.setState({
			answered :usersStates.answeredQuestions, 
			created : usersStates.createdQuestions 
		})

		

	}


	render() {
		const answeredArray = []
		const {users} = this.props
		const userKeys = Object.keys(this.state.answered)

		userKeys.forEach(q => {
			answeredArray.push(this.state.answered[q])
		});

		answeredArray.sort((a,b)=>a.length < b.length ? 1 : -1)

		
		
		return (
			<div>
				{answeredArray.map((q, i) =>(
				<div key={i}>
					<Card author={users[q[0].author]}>
					<div style={{display: "flex", justifyContent : "space-between"}}>
						
							<div style={{flex: "auto", padding : "0px 12px"}}>
								<h3>{q[0].author}</h3>
								<div>
									<div className="flex-row status-display"><span>Answered questions</span><span>{q.length}</span></div>
									<div className="flex-row status-display"><span>Created questions</span><span>{this.state.created[q[0].author].length}</span></div>
								</div>
							</div>
							<div className="score-wrapper" >
								<div className="score-area-title">Score</div>
								<div className="score">{q.length + this.state.created[q[0].author].length}</div>
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
		users,
		questions
	}
}

export default connect(mapStateToProps) (Leaderboard)
