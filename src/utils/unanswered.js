class Questions{
    
    
    
    unanswered(questions, author){
        let keys = Object.keys(questions)

        let unanswered = {}
        
        keys.map(k => {
            if(questions[k].optionOne.votes.includes(author) ===false & questions[k].optionTwo.votes.includes(author) === false){
                unanswered = Object.assign(unanswered, {[questions[k].id] : questions[k]})
            }
        })

        let array = []
        Object.keys(unanswered).forEach(obj => array.push(unanswered[obj]))
        return array.sort((a, b)=>a.id > b.id ? 1 : -1)
    }   



    answered(questions, author){
        let keys = Object.keys(questions)

        let answered = {}
        
        keys.map(k => {
            if(questions[k].optionOne.votes.includes(author) || questions[k].optionTwo.votes.includes(author)){
                answered = Object.assign(answered, {[questions[k].id] : questions[k]})
            }
        })


        let array = []
        Object.keys(answered).forEach(obj => array.push(answered[obj]))
        return array.sort((a, b)=>a.id > b.id ? 1 : -1)
    }


     askedBy(questions, author){
        let keys = Object.keys(questions)

        let unanswered = {}
        
        keys.map(k => {
            if(questions[k].author === author){
                unanswered = Object.assign(unanswered, {[questions[k].id] : questions[k]})
            }
        })

        return unanswered
    }


    userStatus(users, questions){
		
		const questionsKeys = Object.keys(questions)
		const userKeys = Object.keys(users)

		let questionsArray =[]
		
		let questionCreatedByUser = {}
		let questionAnsweredByUser = {}

		//question question to questionsArray
		questionsKeys.forEach(question => {
			questionsArray.push(questions[question])
		});

		


		userKeys.forEach(user => {
			 Object.assign(questionCreatedByUser,{[user] : questionsArray.filter(q => q.author === user)})
			 Object.assign(questionAnsweredByUser,{[user] : questionsArray.filter(q => (q.optionOne.votes.includes(user) || q.optionTwo.votes.includes(user)))})
		});

		

		const userStatus = {
			createdQuestions : questionCreatedByUser,
			answeredQuestions : questionAnsweredByUser
		}

		return userStatus
		
	}
}


export default new Questions()