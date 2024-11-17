import {useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {AccessToken, AxiosErrorResponseData, Credentials} from '../models';
import {loginUserAPI} from '../../../config/api-service';

const useLogin = () => {
    return useMutation<AccessToken, AxiosError<AxiosErrorResponseData>, Credentials>({
        mutationKey: ['login'],
        mutationFn: (credentials: Credentials) => loginUserAPI(credentials)
    });
};

export {useLogin};
