import {Center, Flex, Text} from '@chakra-ui/react';
import {useProfile} from '../useProfile';
import {Navigate, NavLink} from 'react-router-dom';
import {BsArrowLeftShort} from "react-icons/bs";
import LightText from '../../../components/LightText';

const ProfilePage = () => {

    const {data: profileInfo, isLoading} = useProfile();

    if (isLoading) {
        return (<Text>Loading...</Text>);
    }

    if (profileInfo === null || profileInfo === undefined) {
        return (<Navigate to={'/create-profile'}/>)
    }

    return (
        <Flex direction="column" width="100%">
            <Flex
                // height="53px"
                padding="0 16px"
                borderBottom={"1px solid "}
                borderBottomColor={"blackAlpha.300"}
            >
                <Flex
                    width="56px"
                    align="center"
                >
                    <Center
                        width="36px"
                        height="36px"
                        as={NavLink}
                        to={'/home'}
                        borderRadius="100%"
                        _hover={{
                            backgroundColor: "blackAlpha.200"
                        }}

                    >
                        <BsArrowLeftShort size="24px"/>
                    </Center>
                </Flex>
                <Flex direction="column" padding="2px 0">
                    <Text fontSize="20px" fontWeight="700">{profileInfo?.nickname}</Text>
                    <LightText>
                        0 весточек
                    </LightText>
                </Flex>
            </Flex>
            <Text>1</Text><Text>2</Text><Text>3</Text>
        </Flex>
    );
};

export default ProfilePage;