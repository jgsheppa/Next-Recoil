import { useRecoilValue } from "recoil"
import { dateAtom, userAtom } from "../recoil/atoms"
import React from "react"

export default function User() {
    const user = useRecoilValue(userAtom)
    const date = useRecoilValue(dateAtom)

    return <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>
            Name: {user?.name}
        </p>
        <p>
            Age: {user?.age}
        </p>
        <p>Month: {date}</p>
    </div>
}