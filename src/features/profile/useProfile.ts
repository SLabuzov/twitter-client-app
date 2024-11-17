import {Profile} from './models';
import {useQuery} from '@tanstack/react-query';
import {getCurrentUserProfileAPI} from '../../config/api-service';

const useProfile = () => {
    return useQuery<Profile | null>({
        queryKey: ['profile'],
        queryFn: () => getCurrentUserProfileAPI()
    });
};

export {useProfile};
