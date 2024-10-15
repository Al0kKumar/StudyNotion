import React from 'react'
import {Navigate} from 'react-router-dom'


function PrivateRoute({isLoggedIn,children}) {
if(isLoggedIn)
{
    // agar koi person login h toa children return kr de (dashboard)

    return children 
}
else{
    return <Navigate to="/login"></Navigate>

}

 
}

export default PrivateRoute
