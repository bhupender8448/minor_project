import React,{useContext} from 'react'
import { Authcontext } from '../context/Authcontext'


function Feed(){
    const {logout} = useContext(Authcontext)
    return(
        <div>
            <h1>Welcome to Feed</h1>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Feed