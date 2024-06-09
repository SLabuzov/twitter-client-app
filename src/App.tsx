import {Flex} from '@chakra-ui/react';
import {Link} from "react-router-dom";

function App() {

    return (
        <Flex direction="column" flex="1" align="center" justify="center">
            <Link to="/login">Форма входа</Link>
            <Link to="/register">Форма регистрации</Link>
        </Flex>

    )
}

export default App
