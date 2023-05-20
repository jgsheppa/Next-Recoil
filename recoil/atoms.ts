import { atom } from "recoil";
import { User } from "./types";

export const userAtom = atom<User | undefined>({
    key: 'userAtom',
    default: undefined
})

export const occupationAtom = atom<string>({
    key: 'occupationAtom',
    default: undefined
})

export const yearAtom = atom({
    key: 'yearAtom',
    default: new Date().getFullYear()
})
