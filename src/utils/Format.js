

class Format {
    author(author, users){
        return  {...users[author]}
    }

    question(questions, id){
        return {...questions[id]}
    }
}


export default new Format()