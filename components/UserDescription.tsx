import { useRecoilValue } from "recoil"
import { userDescriptionSelector } from "../recoil/selectors"
import React from "react"

export default function UserDescription() {
    const description = useRecoilValue(userDescriptionSelector)
    return <p>{description}</p>
}