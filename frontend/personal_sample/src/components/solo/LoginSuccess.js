import React, { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

function LoginSuccsess(){

    const [name, setName] = useState('');
    const location = useLocation();
    const user = location.state ? location.state.user : null;

    useEffect(() => {
        if(user){
            setName(user.name || ''); 
            console.log(user);
        }
    },[user])

    return(
        <h1>{name}さんこんにちは！</h1>
    );
}

export default LoginSuccsess;