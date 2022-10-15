import React, {useContext} from 'react'
import { Authcontext } from '../context/Authcontext'
import {Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'


function PrivateRoute({component:component, ...rest}){
    const {user} = useContext(Authcontext);
    return(
        <Route {...rest} render={props=> {
            return user?<component {...props} /> : <Navigate to="login" />
        }} />
    )
}

export default PrivateRoute
