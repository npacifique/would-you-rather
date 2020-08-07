import {GET_QUESTIONS, SAVE_QUESTION_ANSWER, SAVE_QUESTION} from '../actions/questions'
import {IS_LOGGED_IN, IS_LOGGED_OUT} from '../actions/login'
import {GET_USERS} from '../actions/users'

export function loading(state = true, action){
	switch (action.type) {
        case GET_QUESTIONS:
        case SAVE_QUESTION_ANSWER:
        case SAVE_QUESTION:
        case IS_LOGGED_IN :
        case IS_LOGGED_OUT:
        case GET_USERS:
		 	return false
		default:
			return state
	}
}