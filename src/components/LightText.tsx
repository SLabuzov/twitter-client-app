import {ReactNode} from 'react';
import {Text} from '@chakra-ui/react';

const LightText = ({children}: { children: ReactNode }) => {
    return (
        <Text
            fontSize='13px'
            fontWeight='400'
            color='#585d79'
        >
            {children}
        </Text>
    );
};

export default LightText;