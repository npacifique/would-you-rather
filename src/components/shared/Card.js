import React from 'react'
import {connect} from 'react-redux'


function Card(props){
    const {avatarURL} = props.author ? props.author : ''
    

    return(
        <div className="card">
            <div className="flex-row">
                <div className="flex-row">
                        <div className="avatar" style={{backgroundImage : `url(${avatarURL})`}}></div>
                        <div className="card-question-area">
                            <h3>{props.header}</h3>
                            <div>
                                <div>
                                {props.optionOne && <div className="status-display">{props.optionOne}</div>}
                                {props.optionTwo && <div className="status-display">{props.optionTwo}</div>}

                                {props.handleViewPoll && <button onClick={()=>{
                                    props.handleViewPoll && props.handleViewPoll(props.id)}}
                                    >View Poll</button>}
                                </div>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
}



export default connect()(Card)