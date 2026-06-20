import React from 'react';
import {Link, useLoaderData} from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();

    return (
        <div className="p-4">
            <Link to="/users">Back to users</Link>

            <div>
                <img src={user.avatar_url} alt={user.login} width="120" height="120" />
                <h1>{user.name || user.login}</h1>
                <p>@{user.login}</p>
                {user.bio && <p>{user.bio}</p>}
            </div>

            <div>
                <p>Company: {user.company || "No company"}</p>
                <p>Location: {user.location || "No location"}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Public repos: {user.public_repos}</p>
                <p>Public gists: {user.public_gists}</p>
                <p>
                    GitHub:{" "}
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                        {user.html_url}
                    </a>
                </p>
                {user.blog && (
                    <p>
                        Blog:{" "}
                        <a href={user.blog} target="_blank" rel="noreferrer">
                            {user.blog}
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
}

export default UserDetail;
