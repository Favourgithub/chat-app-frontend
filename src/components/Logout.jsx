import React from 'react'
import { authActions } from "../redux/actions/auth.action";

export function Logout(props) {

    const handleLogout = async () => {
        const { dispatch, user } = props
        await dispatch(authActions.logout(user.token))
        localStorage.removeItem('state')
    }

    return (
        <h5 className="logout" onClick={handleLogout}>Logout</h5>
    )
}



export default Logout
