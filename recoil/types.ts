import { RecoilState } from "recoil";
import { occupationAtom, userAtom } from "./atoms";

export type User = {
    name: string;
    age: number;
}

export interface SSRAtoms { userAtom: typeof userAtom; occupationAtom: typeof occupationAtom}

export type SSRAtomValues = User | string | undefined