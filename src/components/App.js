import React, {Component} from 'react'
import "../App.css"
import {connect} from 'react-redux'
import Header from './Header'
import Routers from '../authentication/Routers'
import LoadingBar from 'react-redux-loading-bar'



class App extends Component{
   

    render(){
        this.props.store.subscribe(()=>this.forceUpdate())
        const {loading} = this.props
        if(loading){
			return <LoadingBar style={{ backgroundColor: '#00b5d6', height: '5px' }} />
		}

        return(
            <div>
                <Header />
                <div className="container">
                   <Routers dispatch={this.props.dispatch} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({login, loading}) => {
	return { login , loading }
}

export default connect(mapStateToProps)(App)