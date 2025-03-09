import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface User {
    id: string;
    username: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export const authState = atom<AuthState>({
    key: 'authState',
    default: {
        isAuthenticated: false,
        user: null,
    },
    effects_UNSTABLE: [persistAtom],
});