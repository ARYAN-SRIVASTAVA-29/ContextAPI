import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Test(){
    const {user} = useContext(UserContext)

   if(!user) return <div><h2>Enter Password</h2></div>

   return <div><h1>Password is {user.password}</h1></div>
}

export default Test