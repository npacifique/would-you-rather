import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Helper from '../utils/helper'
import Card from './shared/Card'
import Format from '../utils/Format'

class AnsweredUnAnswered extends Component {
    constructor(props){
        super(props)

        this.state= {
            answered : false, 
        }

        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleUnAnswer = this.handleUnAnswer.bind(this)
        this.handleViewPoll = this.handleViewPoll.bind(this)
    }



    handleAnswer(){
        this.setState((p)=>{
            return{answered : !p.answered}
        })
    }

    handleUnAnswer(){
        this.setState((p)=>{
            return{answered : !p.answered}
        })
    }


    handleViewPoll(id){
        this.props.history.push(`/questions/${id}`)
    }

    


    render(){
        const {questions} = this.props
        const {id} = this.props.login.user 

        //get question
        const unansweredQuestion = Helper.unanswered(questions, id )
        const answeredQuestion = Helper.answered(questions, id )

        return(
            <div className="answer-command">
                <div style={{display: "flex"}}>
                    <div className="div-btn" style={{backgroundColor : !this.state.answered && "#3ecea7", color: !this.state.answered && "#FFF", fontWeight : !this.state.answered && "bold"}} onClick={this.handleAnswer}>UnAnswered</div>
                    <div className="div-btn" style={{backgroundColor : this.state.answered && "#3ecea7", color: this.state.answered && "#FFF" ,  fontWeight : this.state.answered && "bold" }} onClick={this.handleUnAnswer}>Answered</div>
                </div>
                <br />
                
                {this.state.answered 
                    ? 
                    answeredQuestion.map((q,i) =>
                    <Fragment key={i}>
                    <Card header="Would you rather" 
                        author={Format.author(q.author, this.props.users)} 
                        id={q.id}
                        optionOne={q.optionOne.text} 
                        handleViewPoll={this.handleViewPoll}
                        /> 
                        <br />
                    </Fragment> ) 
                    :
                    unansweredQuestion.map((q,i) => 
                    <Fragment key={i}>
                    <Card header="Would you rather" 
                        author={Format.author(q.author, this.props.users)} 
                        id={q.id}
                        optionOne={q.optionOne.text} 
                        handleViewPoll={this.handleViewPoll}
                        /> 
                        <br />
                    </Fragment> )

                 }
                
                
    
            </div>
        )
    }
}

const mapStateToProps = ({questions, users, login})=>{
  
    return{
        questions,
        users,
        login, 
    }


}
export default withRouter(connect(mapStateToProps) (AnsweredUnAnswered))
