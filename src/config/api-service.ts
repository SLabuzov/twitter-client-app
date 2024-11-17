import publicApi, {protectedApi} from './api-client';
import {AccessToken, Credentials} from '../features/auth/models';
import {Profile} from '../features/profile/models';

export const loginUserAPI = (credentials: Credentials) => publicApi
    .post<AccessToken>('/api/v1/authentication/access_token', credentials)
    .then(response => response.data);

export const getCurrentUserProfileAPI = () => protectedApi
    .get<Profile | null>('/api/v1/user-profiles/current')
    .then(response => response.data);