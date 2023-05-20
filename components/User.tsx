import React from "react"
import { useRecoilValue } from "recoil"
import { yearAtom, userAtom, occupationAtom } from "../recoil/atoms"
import { userLastNameSelectorFamily } from "../recoil/selectors"

export default function User() {
    const user = useRecoilValue(userAtom)
    const year = useRecoilValue(yearAtom)
    const lastName = useRecoilValue(userLastNameSelectorFamily('Windu'))
    const occupation = useRecoilValue(occupationAtom)

    return <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
            First: {user?.name} <br /> Full name: {lastName}
        </p>
        <p>
            Age: {user?.age} 
        </p>
        <p>
            Occupation: {occupation}
        </p>
        <p>Year: {year} (state still available within nested RecoilRoot)</p>
    </div>
}