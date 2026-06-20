import counterReducer from '../features/counterSlice';
import postReducer from '../features/postSlice';
import usersReducer from '../features/usersSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
        users: usersReducer
    }
});

export default store;
