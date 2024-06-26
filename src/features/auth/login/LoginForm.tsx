import z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Credentials} from '../models';
import {useForm} from 'react-hook-form';
import appLogo from '../../../assets/logo.svg';
import {
    Button,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Image,
    Input,
    Link,
    Stack,
    VStack
} from '@chakra-ui/react';

const loginFormSchema = z
    .object({
        username: z.string().email("Невалидный email"),
        password: z.string().min(8, "Пароль должен содержать минимум 8 символов")
    });

type LoginFormData = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
    isError: boolean;
    isLoading: boolean;
    errorMessage?: string;
    onFormSubmit: (credentials: Credentials) => void;
    onLinkClick: () => void;
}

const LoginForm = ({isError, isLoading, errorMessage, onFormSubmit, onLinkClick}: LoginFormProps) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    });

    return (
        <Flex direction="row" flex="1" align="center" justify="center" backgroundColor="gray.100">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <Center maxW="lg" w="lg" shadow="lg" backgroundColor="white" rounded="md">
                    <Stack spacing="2" pt="16" pb="16">
                        <Center pb="4">
                            <VStack width="lg" ps="16" pe="16">
                                <Image boxSize="64px" src={appLogo}/>
                                <Heading fontSize="2xl">Войдите в свой аккаунт</Heading>
                                {isError &&
                                    <Center width="100%" backgroundColor="red.200" p="16px" borderRadius="8px">
                                        <Heading fontSize="2xm" color="red.700">{errorMessage}</Heading>
                                    </Center>
                                }
                            </VStack>
                        </Center>
                        <FormControl isInvalid={!!errors.username} width="lg" ps="16" pe="16">
                            <FormLabel>Электронная почта</FormLabel>
                            <Input id="email" type="email"
                                   placeholder="Введите электронную почту" {...register('username')}/>
                            <FormErrorMessage>
                                {errors.username?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.password} width="lg" ps="16" pe="16">
                            <FormLabel>Пароль</FormLabel>
                            <Input id="password" type="password" placeholder="********" {...register('password')}/>
                            <FormErrorMessage>
                                {errors.password?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Stack spacing="6" pt="4" ps="16" pe="16">
                            <Button type="submit" colorScheme="twitter" variant="solid" isDisabled={isLoading}>
                                Войти
                            </Button>
                            <Link color="twitter.500" onClick={onLinkClick}>
                                Аккаунт еще не зарегистрирован
                            </Link>
                        </Stack>
                    </Stack>
                </Center>
            </form>
        </Flex>
    );
};

export default LoginForm;
