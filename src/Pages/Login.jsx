import users from '../Data/users.json'
import {useState} from "react";

console.log(users)

const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginError, setLoginErorr]  =useState(null)

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
            }
        })

        if(!foundUser){
            setLoginErorr('nepostojeci korisnik')
        }

    }

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