import {useContext} from "react";
import {UserContext} from "../App";

const Navigation = () => {

    const {userState} = useContext(UserContext);
    console.log('userState', userState);

    const logoutUser = () => {
        localStorage.removeItem('userData')
        window.location.reload()

    }

    return (
        <>
            {userState.isLoggedIn &&
                <a href='Logout' onClick={logoutUser}>Logout</a>
            }
            {!userState.isLoggedIn &&
                <a href='Login'>Login</a>
            }


        </>
    )
}
export default Navigation
