import {Flex} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';

const MainOutletContainer = () => {
    return (
        <Flex
            width="600px"
            height="100vh"
            borderRight={"1px solid "}
            borderRightColor={"blackAlpha.300"}
        >
            <Outlet/>
        </Flex>
    );
};

export default MainOutletContainer;