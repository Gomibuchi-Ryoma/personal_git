import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {

    return (
        <div className="home-container">
            <h1>みんなで自己紹介しよう？？</h1>
            <div className="button-container">
                <Link to="/userform">
                    <button className="action-button-user">新規登録</button>
                </Link>

                <Link to="/login">
                <button className="action-button-user">ログイン</button>
                </Link>
                
                <Link to="/adminLogin">
                    <button className="action-button-admin">管理者ログイン</button>
                </Link>
            </div>
        </div>
    );
}

export default App;
