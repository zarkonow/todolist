import users from '../Data/users.json'
import {useState} from "react";

console.log(users)

const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const checkCredentials = () =>{
        console.log('test')
    }

    return <>

    <form>
        <input onInput={e => setUsername(e.target.value)} placeholder='korisnicko ime' type='text'/>
        <input onInput={e => setPassword(e.target.value)} placeholder='unesite lozinku' type='password'/>
        <button type='button' onClick={checkCredentials}>Login</button>

    </form>

</>
}

export default Login