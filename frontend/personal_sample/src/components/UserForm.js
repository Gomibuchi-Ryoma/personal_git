import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editing, currentUser, clearForm }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (editing) {
            setName(currentUser.name);
            setEmail(currentUser.email);
            setPassword(currentUser.password);
        } else {
            clearForm();
        }
    }, [editing, currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            updateUser({ name, email, password });
        } else {
            addUser({ name, email, password });
        }
    };

    return (
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
            <button onClick={handleSubmit}>
                {editing ? '更新' : '追加'}
            </button>
        </div>
    );
}

export default UserForm;
