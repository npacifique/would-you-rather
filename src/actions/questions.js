import  * as API from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

function saveQuestionAnswer(){
    return {
        type: SAVE_QUESTION_ANSWER
    }
}


function saveQuestion(question){
    return {
        type: SAVE_QUESTION,
        question
    }
}


export function handleSaveQuestion(question){
    return (dispatch)=>{
        
        return API._saveQuestion(question).then(q =>{
            dispatch(saveQuestion(q))
            dispatch(handleGetQuestions())            
        })
    }
}


export function handleSaveQuestionAnswer ({authedUser, qid, answer}){
    return(dispatch)=>{
       dispatch(saveQuestionAnswer())
        return API._saveQuestionAnswer({authedUser, qid, answer}).then(q =>{
            dispatch(handleGetQuestions())
        })
    }
}

export function handleGetQuestions(){
    return (dispatch)=>{
        dispatch(showLoading())
        return API._getQuestions().then(q=>{
            dispatch(getQuestions(q))
            dispatch(hideLoading())
        })
    }
}