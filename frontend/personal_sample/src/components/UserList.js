import React from 'react';

function UserList({ users, editUser, deleteUser }) {
    return (
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
    );
}

export default UserList;
