import './Login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // フォームの有効性をチェックする
    useEffect(() => {
        const isEmailValid = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const isPasswordValid = password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
        setIsFormValid(isEmailValid && isPasswordValid);
        setErrorMessage('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        if (isFormValid) {
            try {
                const response = await axios.post('http://localhost:8080/api/users/log', {
                    email,
                    password
                });

                
                if(response.data != null){
                    console.log('ログイン成功:', response.data);
                    loginOk(response.data);
                }else{
                    console.log('ログイン失敗:', response.data);
                    navigate('/'); // ログイン成功後のリダイレクト先を設定する
                }
                
                
            } catch (error) {
                console.error('ログインエラー:', error.message);
                setErrorMessage('ログインに失敗しました');
            }
        } else {
            setErrorMessage('正しく入力してください');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const loginOk = (user) =>{
        navigate('/loginSuccess',{state:{ user }});
    }

    return (
        <div className='user-form'>
            <h1>ログイン</h1>
            <input
                type="text"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-input-container">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワード(大小英数字8文字以上)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="password-toggle-button" onClick={togglePasswordVisibility}>
                    {showPassword ? "非表示" : "表示"}
                </button>
            </div>
            <button className='submit-button' onClick={handleSubmit}>
                ログイン
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Login;
