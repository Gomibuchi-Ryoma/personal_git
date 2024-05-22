import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import { useNavigate } from 'react-router-dom';
import './AdminDashBoard.css'

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [nowUser, setNowUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/users/')
            .then(response => {
                console.log('Fetched users:', response.data);
                setUsers(response.data)
            })
            .catch(error => {
                console.error('Error fetching users;', error);
            });
    }, []);


    const deleteUser = (id) => {
        if (window.confirm('本当に削除しますか？')) {
            axios.delete(`http://localhost:8080/api/users/${id}`)
                .then(() => setUsers(users.filter(user => user.id !== id)))
                .catch(error => console.error(error));
            console.log(id);

        }
    };

    // ここまでは大丈夫

    const editUser = (user) => {
        navigate('/updateform', { state: { user } });
    };




    return (
        <div className="admin-container">
            <div className="admin-dashboard">
                <h1>管理者用ボード</h1>
                <div className="user-list">
                    <h2>ユーザー一覧</h2>
                    <UserList
                        users={users}
                        editUser={editUser}
                        deleteUser={deleteUser}
                    />
                </div>
            </div>
        </div>
    );
}



export default AdminDashboard;


