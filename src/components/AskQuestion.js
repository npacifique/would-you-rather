/* eslint-disable no-undef */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Format from '../utils/Format'
import Card from './shared/Card'
import {handleSaveQuestionAnswer} from '../actions/questions'

class AskQuestion extends Component{
    constructor(props){
        super(props)
        this.handleResult = this.handleResult.bind(this)
        this.handleChange = this.handleChange.bind(this)
        

        this.state = {
            value : null, 
            isValue : true
        }
    }

 
    handleChange(e){

        const value = e.target.value        
        this.setState((prv)=>{
            return{
                value : prv.value = value,
                isValue : false
            }
        })

    }
    
    handleResult(author,{authedUser, qid, answer}){
       
        this.state.value && this.props.dispatch(handleSaveQuestionAnswer({authedUser, qid , answer}))
        this.props.history.push(`/result/${author}/${qid}`)
    }




    render(){
        
        const {question_id} = this.props.match.params
        const question = this.props.question(question_id) 
        
        const {id, author, optionOne, optionTwo} = {...question}

        return(
            <Card header="Would you rather" author={Format.author(author, this.props.users)}>
                <div>
                    {optionOne && 
                    <form>
                        <div>
                            <input onChange={this.handleChange}  
                                type="radio" name="question" 
                                id="optionOne" 
                                value={"optionOne"} 
                                defaultChecked={optionOne.votes.includes(this.props.userId) && true }  />
                            <label className="status-display" htmlFor="optionOne">{optionOne.text}</label></div>
                        <div>
                            <input onChange={this.handleChange} 
                                type="radio" 
                                name="question" 
                                id="optionTwo" 
                                value={"optionTwo"} 
                                defaultChecked={optionTwo.votes.includes(this.props.userId) && true } />
                            <label className="status-display" htmlFor="optionTwo">{optionTwo.text}</label>
                        </div>
                        <div>
                            <button 
                                onClick={(e)=>{
                                e.preventDefault()
                                this.handleResult(author, {authedUser :this.props.userId, qid : id, answer: this.state.value})}} 
                                >Submit
                            </button>
                        </div>
                    </form>}
                </div>
            </Card>
        )
    }
}


const mapStateToProps = ({questions, users, login})=>{
    return{
        question : (question_id)=>questions[question_id], 
        users, 
        userId : login.user.id

    }
}

export default withRouter(connect(mapStateToProps)(AskQuestion))