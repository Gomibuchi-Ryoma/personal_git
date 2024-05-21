import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8080/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const addUser = (newUser) => {
        axios.post('http://localhost:8080/api/users', newUser)
            .then(response => setUsers([...users, response.data]))
            .catch(error => console.error(error));
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
    };

    const updateUser = (updatedUser) => {
        axios.put(`http://localhost:8080/api/users/${currentUser.id}`, updatedUser)
            .then(response => {
                setUsers(users.map(user => (user.id === currentUser.id ? response.data : user)));
                setEditing(false);
                setCurrentUser({});
            })
            .catch(error => console.error(error));
    };

    const clearForm = () => {
        setCurrentUser({});
        setEditing(false);
    };

    return (
        <div className="container">
            <h1>登録</h1>
            <UserForm 
                addUser={addUser} 
                updateUser={updateUser} 
                editing={editing} 
                currentUser={currentUser} 
                clearForm={clearForm}
            />
            <UserList 
                users={users} 
                editUser={editUser} 
                deleteUser={deleteUser}
            />
        </div>
    );
}

export default App;
