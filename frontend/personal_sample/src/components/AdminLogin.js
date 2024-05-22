import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './AdminLogin.css';

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const adPass = 'dreamcareer-Admin';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === adPass) {
            navigate('/admindashboard');
        } else {
            setErrorMessage('パスワードが間違っています');
        }
    };

    // パスワードの表示/非表示を切り替える関数
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='update-form'>
            <h1>管理者ログイン</h1>
            <div className="password-input-container">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="password-toggle-button" onClick={togglePasswordVisibility}>
                    {showPassword ? "非表示" : "表示"}
                </button>
            </div>
            <button onClick={handleSubmit}>
                ログイン
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default AdminLogin;
