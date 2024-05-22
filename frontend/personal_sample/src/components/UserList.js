import React from 'react';
import './UserList.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function UserList({ users, editUser, deleteUser }) {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>名前</th>
                    <th>メールアドレス</th>
                    <th>パスワード</th>
                    <th>編集</th>
                    <th>削除</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td className='bt'><button className="edit" onClick={() => editUser(user)}>更新</button></td>
                    <td className='bt'><button className="delete" onClick={() => deleteUser(user.id)}>削除</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}

export default UserList;
