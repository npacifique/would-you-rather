class Helper{
    
    
    
    unanswered(questions, author){
        let keys = Object.keys(questions)

        let unanswered = {}
        
        keys.map((k)=> {
            if(questions[k].optionOne.votes.includes(author) ===false & questions[k].optionTwo.votes.includes(author) === false){
                unanswered = Object.assign(unanswered, {[questions[k].id] : questions[k]})
            }

            return ''
        })

        let array = []
        Object.keys(unanswered).forEach(obj => array.push(unanswered[obj]))
        return array.sort((a, b)=>a.timestamp < b.timestamp ? 1 : -1)
    }   



    answered(questions, author){
        let keys = Object.keys(questions)

        let answered = {}
        
         keys.map(k => {
            if(questions[k].optionOne.votes.includes(author) || questions[k].optionTwo.votes.includes(author)){
               return answered = Object.assign(answered, {[questions[k].id] : questions[k]})
            }  
            return answered
            
        })


        let array = []
        Object.keys(answered).forEach(obj => array.push(answered[obj]))
        return array.sort((a, b)=>a.timestamp < b.timestamp ? 1 : -1)
    }


     askedBy(questions, author){
        let keys = Object.keys(questions)

        let unanswered = {}
        
        keys.map(k => {
            if(questions[k].author === author){
                unanswered = Object.assign(unanswered, {[questions[k].id] : questions[k]})
            }

            return unanswered
        })

        
    }

    
    loaderBoard(questions, questionIds, userIds){
		let questionsArray = []
		let groupByAuthor = []
		let loadBoard = []
		
		questionIds.forEach(q => questionsArray.push(questions[q]))

		userIds.forEach(u => {
			groupByAuthor.push(questionsArray.filter(q => q.author === u))
		})

	
		userIds.forEach(userId => {
			loadBoard.push(
				{[userId] : questionsArray.filter(question =>question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId)), 
				answer : (questionsArray.filter(question =>question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId))).length, 
				created : (questionsArray.filter(question =>question.author === userId)).length, 
				score : (questionsArray.filter(question =>question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId))).length + 
						(questionsArray.filter(question =>question.author === userId)).length
			})

			
		})

		return loadBoard.sort((a, b)=>a.score < b.score ? 1 : -1)
	}

}


export default new Helper()