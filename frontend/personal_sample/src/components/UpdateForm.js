import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UpdateForm.css';
import axios from 'axios';

function UpdateForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //パスワードの表示保持
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state ? location.state.user : null;

    useEffect(() => {
        if (user) {
            setName(user.name || '');  // `user.name` が undefined にならないように
            setEmail(user.email || '');  // `user.email` が undefined にならないように
            setPassword(user.password || '');  // `user.password` が undefined にならないように
        }
    }, [user]);

    //更新の処理
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/users/${user.id}`, { name, email, password })
            .then(() => {
                navigate('/admindashboard');
            })
            .catch(error => console.error(error));
    };

    // 表示・非表示変更
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='update-form'>
            <h1>更新</h1>
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
            <div className="password-input-container">
                <input
                    type={showPassword ? "password" : "text"}
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="password-toggle-button" onClick={togglePasswordVisibility}>
                    {showPassword ? "非表示" : "表示"}
                </button>
            </div>
            <button onClick={handleSubmit}>
                更新
            </button>
        </div>
    );
}

export default UpdateForm;
