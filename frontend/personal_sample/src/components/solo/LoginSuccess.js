import React, { useEffect,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import './LoginSuccess.css'

function LoginSuccsess(){

    const [name, setName] = useState('');
    const [userId, setUserId] = useState(0);
    const location = useLocation();
    const user = location.state ? location.state.user : null;
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setUserId(user.id || 0);
            console.log(user);
        }
    }, [user]);


    const createCards = () => { 
        console.log('Navigating with userId:', userId);
        navigate('/createCard', { state: { userId } });
    };
    const historyCards = () => { 
        console.log('Navigating with userId:', userId);
        navigate('/historyCard', { state: { userId } });
    };

    return(
        <div className="container">
            <h1>{name}さんこんにちは！</h1>
            <button onClick={createCards}>自己紹介カードを追加する</button>
            <button onClick={historyCards}>過去の自己紹介カードを見る</button>
        </div>
        
        
    );
}

export default LoginSuccsess;