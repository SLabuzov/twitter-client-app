import {IconType} from 'react-icons';
import {NavLink, useLocation} from 'react-router-dom';
import {Flex, Heading, Image} from '@chakra-ui/react';

export interface NavMenuItemProps {
    label: string
    icon: IconType
    path: string
}

const NavMenuItem = (props: NavMenuItemProps) => {

    const {label, icon, path} = props;
    const {pathname} = useLocation();

    return (
        <Flex
            as={NavLink}
            to={path}
            height="58px"
            alignItems="center"
            minWidth='300px'
            gap='20px'
            padding="4px 24px"
            style={{
                backgroundColor: pathname === path ? "#F0F1F7" : "",
                borderRadius: pathname === path ? "48px" : "",
            }}
        >
            <Image as={icon} boxSize="28px" color="#191F3C"/>
            <Heading
                as="h2"
                textAlign="center"
                fontSize="20px"
                fontWeight="400"
                color="#191F3C"
                style={{
                    fontWeight: pathname === path ? "700" : "400"
                }}
            >
                {label}
            </Heading>
        </Flex>
    );
};

export default NavMenuItem;