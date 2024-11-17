import {Flex} from '@chakra-ui/react';
import {ReactNode} from 'react';

const SideNavContainer = ({children}: { children: ReactNode }) => {
    return (
        <Flex
            direction="column"
            height={"100vh"}
            align="flex-end"
            backgroundColor="#fafafc"
        >
            {children}
        </Flex>
    );
};

export default SideNavContainer;