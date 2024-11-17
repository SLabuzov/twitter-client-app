import {Avatar, Flex, Text} from '@chakra-ui/react';
import {useProfile} from '../features/profile/useProfile';
import useTokenStore from '../store/tokenStore';
import {LuMoreHorizontal} from "react-icons/lu";
import LightText from './LightText';

const ProfileAvatar = () => {

    const {data: profileInfo} = useProfile();
    const email = useTokenStore(state => state.email);

    return (
        <Flex flexDirection="row" gap="12px">
            <Avatar src={profileInfo?.imageLink}/>
            <Flex flexDirection="column">
                <Text>{profileInfo?.nickname}</Text>
                <LightText>{email}</LightText>
            </Flex>
            <Flex flex='1' justify='center' align='center'>
                <LuMoreHorizontal size='24px' color='#8a8fad'/>
            </Flex>
        </Flex>
    );
};

export default ProfileAvatar;