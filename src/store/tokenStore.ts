import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {jwtDecode} from "jwt-decode";


interface TokenStore {
    idToken: string | null;
    email: string | null;
    logout: () => void;
    login: (idToken: string) => void;
}

const useTokenStore = create<TokenStore>()(
    persist(
        (set) => ({
            idToken: null,
            email: null,
            logout: () => set(
                () => ({
                    idToken: null,
                    email: null
                })
            ),
            login: (idToken) => set(
                () => ({
                    idToken: idToken,
                    email: jwtDecode(idToken).sub,
                })
            )
        }),
        {
            name: 'token-storage'
        }
    )
);

export default useTokenStore;
