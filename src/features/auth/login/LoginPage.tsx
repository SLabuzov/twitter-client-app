import LoginForm from './LoginForm';
import {useLogin} from './useLogin';
import {Credentials} from '../models';

const LoginPage = () => {

    const {
        mutate,
        isPending,
        error,
        isError,
    } = useLogin();

    const handleLogin = (credentials: Credentials) => {
        mutate(credentials, {
            onSuccess: (accessToken) => {
                console.log('accessToken', accessToken);
            }
        });
    }

    return (
        <LoginForm isError={isError}
                   isLoading={isPending}
                   errorMessage={error?.response?.data?.detail}
                   onFormSubmit={handleLogin}/>
    );
};

export default LoginPage;
