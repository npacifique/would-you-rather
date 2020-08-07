import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import middleware from "./middleware"
import { BrowserRouter as Router } from "react-router-dom"
import {handleGetUser} from './actions/users'
import {handleGetQuestions} from './actions/questions'


const store = createStore(reducers, middleware)


store.dispatch(handleGetQuestions())
store.dispatch(handleGetUser())



ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App store={store} />
		</Router>
	</Provider>,
	document.getElementById("root")
)
