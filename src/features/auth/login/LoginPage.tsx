import LoginForm from './LoginForm';
import {useLogin} from './useLogin';
import {Credentials} from '../models';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {

    const {
        mutate,
        isPending,
        error,
        isError,
    } = useLogin();

    const navigate = useNavigate();

    const handleNavigateToRegisterPage = () => {
        navigate('/register');
    }

    const handleLogin = (credentials: Credentials) => {
        mutate(credentials, {
            onSuccess: (accessToken) => {
                console.log('accessToken', accessToken);
                navigate('/');
            }
        });
    }

    return (
        <LoginForm isError={isError}
                   isLoading={isPending}
                   errorMessage={error?.response?.data?.detail}
                   onFormSubmit={handleLogin}
                   onLinkClick={handleNavigateToRegisterPage}
        />
    );
};

export default LoginPage;
