import {useContext} from "react";
import {UserContext} from "../App";

const Navigation = () => {

    const {userState} = useContext(UserContext);
    console.log('userState', userState);

    return (
        <>
            {userState.isLoggedIn &&
                <a href='Logout'>Logout</a>
            }
            {!userState.isLoggedIn &&
                <a href='Login'>Login</a>
            }


        </>
    )
}
export default Navigation
