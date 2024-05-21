import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';  // CSSファイルをインポート

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const addUser = () => {
        const newUser = { name, email, password };
        axios.post('http://localhost:8080/api/users', newUser)
            .then(response => setUsers([...users, response.data]))
            .catch(error => console.error(error));
        setName('');
        setEmail('');
        setPassword('');
    };

    const deleteUser = (id) => {
        if (window.confirm('本当に削除しますか？')) {
            axios.delete(`http://localhost:8080/api/users/${id}`)
                .then(() => setUsers(users.filter(user => user.id !== id)))
                .catch(error => console.error(error));
        }
    };

    const editUser = (user) => {
        setEditing(true);
        setCurrentUser(user);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password)
    };

    const updateUser = () => {
        axios.put(`http://localhost:8080/api/users/${currentUser.id}`, { name, email, password })
            .then(response => {
                setUsers(users.map(user => (user.id === currentUser.id ? response.data : user)));
                setEditing(false);
                setCurrentUser({});
                setName('');
                setEmail('');
                setPassword('');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <h1>登録</h1>
            <div>
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
                    type="text"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {editing ? (
                    <button onClick={updateUser}>更新</button>
                ) : (
                    <button onClick={addUser}>追加</button>
                )}
            </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email} - {user.password}
                        <div>
                            <button onClick={() => editUser(user)}>更新</button>
                            <button className="delete" onClick={() => deleteUser(user.id)}>削除</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
