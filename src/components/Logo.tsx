import appLogo from '../assets/logo.svg';
import {Flex, Heading, Image} from '@chakra-ui/react';

const Logo = () => {
    return (
        <Flex align="center" gap="20px" padding="0 24px">
            <Image boxSize="28px" src={appLogo}/>
            <Heading as="h1" textAlign="center" fontSize="2xl">Весточка</Heading>
        </Flex>

    );
};

export default Logo;