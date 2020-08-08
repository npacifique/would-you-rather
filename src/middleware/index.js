import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { loadingBarMiddleware } from 'react-redux-loading-bar'


export default applyMiddleware(thunk, loadingBarMiddleware())