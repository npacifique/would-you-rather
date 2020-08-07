import {combineReducers}  from 'redux'
import login from './login'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading-bar'
import {loading} from './shared'

export default combineReducers({login, users, questions ,loading , loadingBar: loadingBarReducer})
