import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className="home-container">
            <h1>ホーム</h1>
            <div>
                <Link to="/register">
                    <button>新規登録</button>
                </Link>
                <button>ログイン</button>
                <button>管理者ログイン</button>
            </div>
        </div>
    );
}

export default Home;
