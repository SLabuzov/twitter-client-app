import {Flex} from '@chakra-ui/react';
import SideNavContainer from './SideNavContainer';
import Logo from './Logo';
import MenuItemsContainer from './MenuItemsContainer';
import ProfileAvatar from './ProfileAvatar';

const SideNav = () => {
    return (
        <SideNavContainer>
            <Flex
                flexDirection="column"
                justify="space-between"
                height="100%"
                maxWidth="100%"
                minWidth="200px"
                padding="16px"
                gap="16px"
            >
                <Logo/>
                <MenuItemsContainer/>
                <ProfileAvatar/>
            </Flex>
        </SideNavContainer>
    );
};

export default SideNav;
