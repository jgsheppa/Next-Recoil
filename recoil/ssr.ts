import { MutableSnapshot, RecoilState } from "recoil";
import { occupationAtom, userAtom } from "./atoms";
import { SSRAtoms } from "./types";

export const ssrAtoms: SSRAtoms = {
    userAtom, occupationAtom
}

export const ssrAtomKeys = Object.values(ssrAtoms).map(atom => atom.key)

export const initializeRecoilState = <T>(initialRecoilState: Record<string, T>, atomKeys: string[]) => ({ set }: MutableSnapshot) =>
    Object.keys(initialRecoilState).map((key) => {
        if (atomKeys.includes(key)) {
            const value = initialRecoilState[key]
            const atom = ssrAtoms[key]

            set(atom, value)
        } else {
            console.debug(`Recoil atom ${key} not found in ssrAtoms object!`)
            throw new Error('Recoil atom not found in ssrAtoms object!')
        }
    });
