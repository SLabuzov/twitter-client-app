import {useMutation} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import publicApi from '../../../config/api-client';
import {AccessToken, AxiosErrorResponseData, Credentials} from '../models';

const useLogin = () => {
    return useMutation<AccessToken, AxiosError<AxiosErrorResponseData>, Credentials>({
        mutationKey: ['login'],
        mutationFn: (credentials: Credentials) => publicApi
            .post<AccessToken>('/api/v1/authentication/access_token', credentials)
            .then(response => response.data)
    });
};

export {useLogin};
