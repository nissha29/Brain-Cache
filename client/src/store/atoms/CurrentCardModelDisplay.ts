import { atom } from "recoil";
import { NoteProps } from "../../types/NoteProps";

export const CurrentCardModelDisplay = atom<NoteProps | null>({
    key: 'CurrentCardModelDisplay',
    default: null,
})