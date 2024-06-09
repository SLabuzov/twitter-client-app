import {createBrowserRouter} from 'react-router-dom';
import LoginPage from '../features/auth/login/LoginPage';
import RegisterPage from '../features/auth/register/RegisterPage';
import App from '../App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
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
