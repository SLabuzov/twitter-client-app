import useTokenStore from '../store/tokenStore';
import {Navigate} from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import {useProfile} from '../features/profile/useProfile';
import {Text} from '@chakra-ui/react';

const PrivateRoute = () => {
    const idToken = useTokenStore(state => state.idToken);
    const {data: profileInfo, isLoading} = useProfile();

    if (!idToken) {
        return <Navigate to={'/login'}/>;
    }

    if (isLoading) {
        return (<Text>Loading...</Text>);
    }

    if (profileInfo === null || profileInfo === undefined) {
        return (<Navigate to={'/create-profile'}/>)
    }

    return <RootLayout/>;
};

export default PrivateRoute;