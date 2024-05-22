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
    //パスワードの表示保持
    const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false); // フォームの有効性の状態
    const [errorMessage, setErrorMessage] = useState('');//エラーメッセージ

    // フォームの有効性をチェックする
    useEffect(() => {
        const isEmailValid = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const isPasswordValid = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
        setIsFormValid(name.trim() !== '' && isEmailValid && isPasswordValid);
        setErrorMessage(''); // 入力が変更されたらエラーメッセージをクリアする
    }, [name, email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            addUser({ name, email, password });
            navigate('/');
            setName('');
            setEmail('');
            setPassword('');
        } else {
            setErrorMessage('正しく入力してください');
        }
    };

    //追加の処理
    const addUser = (newUser) => {
        axios.post('http://localhost:8080/api/users', newUser)
            .then(response => setUsers([...users, response.data]))
            .catch(error => console.error(error));
    };

    // 表示・非表示変更
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='user-form'>
            <h1>新規登録</h1>
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
                    type={showPassword ? "text" : "password"} // パスワードの表示状態によってタイプを切り替える
                    placeholder="パスワード(大小英数字8文字以上)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="password-toggle-button" onClick={togglePasswordVisibility}>
                    {showPassword ? "非表示" : "表示"}
                </button>
            </div>
            
            <button className='submit-button' onClick={handleSubmit}>
                追加
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default UserForm;
