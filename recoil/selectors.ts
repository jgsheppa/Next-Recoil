import { selector, selectorFamily } from "recoil";
import { userAtom } from "./atoms";

export const userDescriptionSelector = selector({
    key: 'userDescriptionSelector',
    get: ({get}) => {
       const user = get(userAtom)
       return `${user?.name} is ${user?.age} years old`
    }
})

export const userLastNameSelectorFamily = selectorFamily<string, string>({
    key: 'userSelectorFamily',
    get: param => ({get}) => {
        const user = get(userAtom);
        return `${user?.name} ${param}`
    }
})