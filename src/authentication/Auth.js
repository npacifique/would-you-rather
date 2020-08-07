
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken'

class Auth{

    constructor(){
        this.token = false
    }
    
    login(user, users){
        return new Promise((resolve, reject)=>{
            let getUser = users[user.id]
            if(getUser){
                let accessToken = jwt.sign(getUser, 'security_key')
                Cookies.set('_session_',  accessToken)
                resolve(accessToken)
            }else{
                reject({error : 'the username or password is incorrect'})
            }
        })
    }

    logout(){
        Cookies.remove('_session_')
    }


    isLoggedIn(){

        let cookie = Cookies.get('_session_')

        let accessToken = jwt.verify(cookie, 'security_key', (error, decoded)=>{
            if(error) return this.token =  {loggedIn : false, user : {}}
            return this.token = {loggedIn : true, user : decoded}
        })

        return this.token = accessToken ? accessToken : {loggedIn : false, user : {}}
    }
}



export default new Auth()