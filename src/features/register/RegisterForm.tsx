import {
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Link,
    Stack,
    VStack
} from '@chakra-ui/react';
import appLogo from '../../assets/logo.svg';

const RegisterForm = () => {
    return (
        <Flex direction="row" flex="1" align="center" justify="center" backgroundColor="gray.100">
            <Center maxW="lg" w="lg" shadow="lg" backgroundColor="white" rounded='md'>
                <Stack spacing="2" pt="16" pb="16">
                    <Center pb="8">
                        <VStack>
                            <Image boxSize="64px" src={appLogo}/>
                            <Heading fontSize="2xl">Зарегистрируйте свой аккаунт</Heading>
                        </VStack>
                    </Center>
                    <FormControl>
                        <FormLabel>Электронная почта</FormLabel>
                        <Input id="email" type="email" placeholder="Введите электронную почту"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Пароль</FormLabel>
                        <Input id="password" type="password" placeholder="********"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Подтвердите пароль</FormLabel>
                        <Input id="confirmPassword" type="password" placeholder="********"/>
                    </FormControl>
                    <Stack spacing="6" pt="4">
                        <Button type="submit" colorScheme="twitter" variant="solid">
                            Зарегистрировать аккаунт
                        </Button>
                        <Link color="twitter.500">
                            Аккаунт уже зарегистрирован?
                        </Link>
                    </Stack>
                </Stack>
            </Center>
        </Flex>
    );
};

export default RegisterForm;