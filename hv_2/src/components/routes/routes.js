import {createBrowserRouter} from 'react-router';
import App from '../../App';
import ToDoList from '../ToDoList/ToDoList';
import Users from '../Users';
import {getUsers, getUserDetails} from '../../loaders/usersLoaders';
import UserDetail from '../UserDetail';
import About from '../About';
import Posts from '../Posts';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/todo",
                    element: <ToDoList />
                },
                {
                    path: "/users",
                    element: <Users />,
                    loader: getUsers
                },
                {
                    path: "/users/:id",
                    element: <UserDetail />,
                    loader: getUserDetails
                },
                {
                    path: "/search",
                    element: <UserDetail />,
                },
                {
                    path: "/posts",
                    element: <Posts />,
                }
            ]
        }
    ]
)

export default router;
