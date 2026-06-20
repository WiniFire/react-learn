import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostsWithAuthors } from '../features/postSlice';
import { fetchUsers } from '../features/usersSlice';
import { useGetTodosQuery } from '../api/todoApi';

const Posts = () => {
    const {data, loading: todoLoading, error: todoError} = useGetTodosQuery();

    const dispatch = useDispatch();
    const posts = useSelector(selectPostsWithAuthors);
    const {loading, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;


    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
}

export default Posts;
