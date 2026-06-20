import React, {useState} from 'react';
import {Link, useSearchParams} from 'react-router'
import {useLoaderData} from 'react-router';

const Users = () => {
    const users = useLoaderData();
    const [queryParams, setQueryParams] = useSearchParams({});
    const [searchText, setSearchText] = useState(queryParams.get('q') || "");

    const handleSearch = (e) =>{
        const value = e.target.value;

        setSearchText(value);
        value ? setQueryParams({q: value}) : setQueryParams({});
    }

    const filteredUsers = (user) => {
        return searchText.trim() === ""
            ? true
            : user.login.toLowerCase().includes(searchText.toLowerCase());
    }

    return (
        <div className="p-4">
            <h1>Users</h1>

            <input
                type="text"
                value={searchText}
                onChange={handleSearch}
                className="border"
                placeholder="Search GitHub users"
            />

            <div>
                {users.filter(filteredUsers).map(user => (
                    <div key={user.id}>
                        <Link to={`/users/${user.login}`}>
                            <img src={user.avatar_url} alt={user.login} width="40" height="40" />
                            <span>{user.login}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
