import {GET_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION} from '../actions/questions'

export default function questions(state = {}, action ){
    switch (action.type) {
        case GET_QUESTIONS:
            return state = action.questions
        case SAVE_QUESTION: 
            return state = {...state, ...questions , [action.question.id] : action.question}
        case SAVE_QUESTION_ANSWER: 
            return state = Object.assign(state , action.question)         
        default:
            return state;
    }
}