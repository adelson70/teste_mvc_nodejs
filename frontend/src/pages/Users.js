import React, {useEffect, useState} from "react";
import api from "../config/api";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/user')
            .then(reponse => setUsers(reponse.data))
    }, [])

    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div>------------------------</div>
                        {user.id}   |   {user.nome}   |   {user.idade} anos
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users;