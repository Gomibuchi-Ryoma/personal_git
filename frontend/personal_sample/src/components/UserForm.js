import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';
import axios from 'axios';

function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     if (editing) {
    //         setName(currentUser.name);
    //         setEmail(currentUser.email);
    //         setPassword(currentUser.password);
    //     } else {
    //         console.log(editing);
    //         clearForm();
    //     }
    // }, [editing, currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({ name, email, password });
        navigate('/');

        setName('');
        setEmail('');
        setPassword('');
    };

    //追加の処理
    const addUser = (newUser) => {
        axios.post('http://localhost:8080/api/users', newUser)
            .then(response => setUsers([...users, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div className='user-form'>
            <h1>登録</h1>
            <input
                type="text"
                placeholder="名前"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>
                追加
            </button>
        </div>
    );
}

export default UserForm;
