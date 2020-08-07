import React from 'react'

function CardResult({text, opt, votes, userOption}){
    return(
          <div className="result-wrapper">
            {userOption && <div className="vote">Your Vote</div>}
            <div>
                <p>Would you rather {text}?</p>
            </div>
            
            <div>
                <progress 
                    value={(Math.round(parseInt(opt) * 100 / parseInt(votes))).toString()} 
                    max={"100"} 
                    style={{
                    width : "100%", 
                    height : "20px", 
                    borderRadius : "3px"}}></progress>
            </div>
            
            <div>
                <h5>{`${opt} out of ${votes}`}</h5>
            </div>                
        </div>
    )
}

export default CardResult