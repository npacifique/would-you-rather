import React, { Component } from "react"
import "../card.css"

class QuestionCard extends Component {
	render() {
		return (
			<div className="">
				<div className="form-header">Tyler McGinnis asks:</div>
				<div className="card flex-row">
					<div className="avatar"></div>
					<div className="card-ask-question">
						<h3>Would You Rather...</h3>
						<form>
							<label htmlFor="questionA">
								<input
									type="radio"
									id="questionA"
									name="question"
									value=""
								/>
								find $50 yourself
							</label>

							<label htmlFor="questionB">
								<input
									type="radio"
									id="questionB"
									name="question"
									value=""
								/>
								have your best friend find $500
							</label>
							<button className="card-btn">Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default QuestionCard
