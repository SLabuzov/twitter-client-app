import {createBrowserRouter} from 'react-router-dom';
import LoginPage from '../features/auth/login/LoginPage';
import RegisterPage from '../features/auth/register/RegisterPage';
import App from '../App';
import HomePage from '../features/home/HomePage';
import PrivateRoute from './PrivateRoute';
import ProfilePage from '../features/profile/view/ProfilePage';
import CreateProfilePage from '../features/profile/create/CreateProfilePage';
import ExplorePage from '../features/explore/ExplorePage';
import FollowersPage from '../features/followers/FollowersPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        element: <PrivateRoute/>,
        children: [
            {
                path: "/home",
                element: <HomePage/>
            },
            {
                path: "/profile",
                element: <ProfilePage/>
            },
            {
                path: "/explore",
                element: <ExplorePage/>
            },
            {
                path: "/followers",
                element: <FollowersPage/>
            },
            {
                path: "/create-profile",
                element: <CreateProfilePage/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    }
]);

export default router;
