import axios, {AxiosError} from "axios";
import useTokenStore from '../store/tokenStore';

const publicApi = axios.create({});
const protectedApi = axios.create({});

// protectedApi.interceptors.request.use(
//     async config => {
//         const {idToken} = useTokenStore.getState();
//
//         if (idToken) {
//             config.headers.Authorization = `Bearer ${idToken}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// Добавляем перехват запросов
protectedApi.interceptors.request.use(
    function (config) {
        // Здесь можете сделать что-нибудь с перед отправкой запроса
        const {idToken} = useTokenStore.getState();

        if (idToken) {
            config.headers.Authorization = `Bearer ${idToken}`;
        }
        return config;
    }, function (error) {
        // Сделайте что-нибудь с ошибкой запроса
        return Promise.reject(error);
    }
);

// Добавляем перехват ответов
protectedApi.interceptors.response.use(
    function (response) {
        // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
        // Здесь можете сделать что-нибудь с ответом
        return response;
    }, function (error: AxiosError) {
        // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
        // Здесь можете сделать что-то с ошибкой ответа
        if (error.response?.status === 401) {
            const {logout} = useTokenStore.getState();
            logout();
        }
        return Promise.reject(error);
    }
);

export default publicApi;
export {protectedApi};
