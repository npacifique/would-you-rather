import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Card from './shared/Card'
import CardResult from './shared/CardResult'

class ShowResult extends Component{
   
    render(){
        
        const {author, question_id} = this.props.match.params
        const {optionOne, optionTwo} = {...this.props.question(question_id)}
        const avatarURL = this.props.users[author] ? this.props.users[author].avatarURL : ''
        

        // const optOne = (optionOne ? optionOne.votes.length : 0) 
        // const optTwo = (optionTwo ? optionTwo.votes.length : 0)
        // const votes = optOne + optTwo

        const options = [optionOne, optionTwo]
        const id = this.props.userId
        
        return(

            <div>
                <div className="form-header">
                    <h3>Asked by {author}</h3>
                </div>
                <Card author={{avatarURL : avatarURL}}>
                    <div>
                        <h3>Results: </h3>
                
                    {options.map((option, i) => 
                        
                        <div key={i} >
                            {option && (option.votes.includes(id) && <br /> )}
                            <CardResult
                                userOption={option && option.votes.includes(id)} 
                                text={option && option.text} 
                                opt={option && option.votes.length} 
                                votes={option && options[0].votes.length + options[1].votes.length} 
                            />
                            <br />
                        </div>
                    )}
                    </div>
                    
                
                </Card>
            </div>

            
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

export default withRouter(connect(mapStateToProps) (ShowResult))