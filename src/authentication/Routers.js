import React, {Fragment} from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from '../components/Login'
import AddQuestion from '../components/AddQuestion'
import Leaderboard from '../components/Leaderboard'
import QuestionCard from '../components/QuestionCard'
import ProtectedRoutes from './ProtectedRoutes'
import ProtectedLogin from './ProtectedLogin'
import AnsweredUnAnswered from '../components/Answered.UnAnswered'
import AskQuestion from '../components/AskQuestion'
import PageNotFound from '../components/PageNotFound'
import ShowResult from '../components/ShowResult'


const Routes = (props) => {
    return(
        <Fragment>
            <Switch>
                <ProtectedRoutes path="/" component={AnsweredUnAnswered} exact />
                <ProtectedRoutes path="/" component={QuestionCard} exact />
                <ProtectedRoutes path="/add" component={AddQuestion} />
                <ProtectedRoutes path="/leaderboard" component={Leaderboard} />
                <ProtectedRoutes dispatch={props.dispatch}  path="/questions/:question_id" component={AskQuestion} exact />
                <ProtectedRoutes dispatch={props.dispatch}  path="/result/:author/:question_id" component={ShowResult} exact />
                <ProtectedLogin path="/login" component= {Login} />
                <Route path="*" component={PageNotFound} />
                
                
                
                
            </Switch>
        </Fragment>
    )
}

const mapStateToProps = (state, {handleUserLogout, handleUserLogin}) =>{
    return { state, handleUserLogout , handleUserLogin}
}


export default connect(mapStateToProps)(Routes)

//<ProtectedRoutes path="/" component={QuestionCard} />