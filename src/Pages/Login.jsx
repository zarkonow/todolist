import users from '../Data/users.json'
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../App";

console.log(users)

const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginError, setLoginError] = useState(null)

    const {userState, userDispatch} = useContext(UserContext);
    console.log(userState)


    const checkCredentials = () => {
        if (username === null || password === null || username.trim() === '' || password.trim() === '') {
            setLoginError('niste uneli sifru ili korisnicko ime')
            return;
        }

        let foundUser = false
        users.forEach((user, index) => {
            if (user.username === username && user.password === password) {
                foundUser = true
                setLoginError(null)
                userDispatch({type: 'SET_USERNAME', payload: username})
                userDispatch({type: 'SET_IS_LOGGED_IN', payload: true})
                userDispatch({type: 'SET_LOGIN_TIME', payload: new Date().getTime()})

            }
        })

        if (!foundUser) {
            setLoginError('nepostojeci korisnik')
        }

    }

    useEffect(() => {
        if (userState.isLoggedIn) {
            localStorage.setItem('userData', JSON.stringify(userState))
        }
    }, [userState])

    return <>

        {!userState.isLoggedIn &&
            <form>
                <p>{loginError}</p>
                <p>Hello World</p>
                <input onInput={e => setUsername(e.target.value)} placeholder='korisnicko ime' type='text'/>
                <input onInput={e => setPassword(e.target.value)} placeholder='unesite lozinku' type='password'/>
                <button type='button' onClick={checkCredentials}>Login</button>

            </form>
        }
    </>
}

export default Login