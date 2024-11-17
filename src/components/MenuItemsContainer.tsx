import {Flex} from '@chakra-ui/react';
import {GoHome, GoPeople} from 'react-icons/go';
import NavMenuItem, {NavMenuItemProps} from './NavMenuItem';
import {LuUser2} from "react-icons/lu";
import {CgSearch} from 'react-icons/cg';


const navMenuItems: Array<NavMenuItemProps> = [
    {
        label: 'Домашняя страница',
        icon: GoHome,
        path: '/home'
    },
    {
        label: 'Поиск авторов',
        icon: CgSearch,
        path: '/explore'
    },
    {
        label: 'Подписчики',
        icon: GoPeople,
        path: '/followers'
    },
    {
        label: 'Настройки профиля',
        icon: LuUser2,
        path: '/profile'
    }
];

const MenuItemsContainer = () => {
    return (
        <Flex flex={"1"} direction="column">
            {navMenuItems.map(({label, icon, path}) => (
                <NavMenuItem key={label} label={label} path={path} icon={icon}/>
            ))}
        </Flex>
    );
};

export default MenuItemsContainer;
