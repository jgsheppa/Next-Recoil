import { atom } from "recoil";

export type User = {
    name: string;
    age: number;
}

export const userAtom = atom<User | undefined>({
    key: "userAtom",
    default: undefined
})

export const dateAtom = atom({
    key: 'dateAtom',
    default: new Date().getUTCMonth()
})