import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const sharingStatus = atom({
    key: 'sharingStatus',
    default: false,
    effects_UNSTABLE: [persistAtom],
})