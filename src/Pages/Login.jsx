import users from '../Data/users.json'
import {useEffect, useReducer, useState} from "react";
import {getUsersInitialData, initialUserData, userReducer} from "../Reducers/User";

console.log(users)

const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginError, setLoginErorr]  =useState(null)
    const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData())
    console.log(userState)


    const checkCredentials = () =>{
        if(username === null || password === null || username.trim() === '' || password.trim() === '') {
            setLoginErorr('niste uneli sifru ili korisnicko ime')
            return;
        }

        let foundUser = false
        users.forEach((user, index) =>{
            if(user.username === username && user.password === password){
                foundUser = true
                setLoginErorr(null )
                userDispatch({type:'SET_USERNAME', payload:username})
                userDispatch({type:'SET_IS_LOGGED_IN', payload:true})
            }
        })

        if(!foundUser){
            setLoginErorr('nepostojeci korisnik')
        }

    }

    useEffect (()=>{
        if(userState.isLoggedIn) {
            localStorage.setItem('userData', JSON.stringify(userState))
        }
    },[userState])

    return <>

    <form>
        <p>{loginError}</p>
        <input onInput={e => setUsername(e.target.value)} placeholder='korisnicko ime' type='text'/>
        <input onInput={e => setPassword(e.target.value)} placeholder='unesite lozinku' type='password'/>
        <button type='button' onClick={checkCredentials}>Login</button>

    </form>

</>
}

export default Login