import {Flex} from '@chakra-ui/react';
import {Link, Navigate} from "react-router-dom";
import useTokenStore from './store/tokenStore';

function App() {

    const idToken = useTokenStore(state => state.idToken);

    if (idToken) {
        return <Navigate to={'/home'}/>
    }

    return (
        <Flex direction="column" flex="1" align="center" justify="center">
            <Link to="/login">Форма входа</Link>
            <Link to="/register">Форма регистрации</Link>
        </Flex>
    );
}

export default App
