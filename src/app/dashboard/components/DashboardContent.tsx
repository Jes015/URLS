'use client'
import { BaseComponentType } from "@/models/component.model"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { LinkInfo } from "./LinkInfo/LinkInfo"

export const DashboardContent: BaseComponentType = (props) => {

    const [parent] = useAutoAnimate()

    return (
        <div
            className="grid grid-cols-4 gap-2"
            ref={parent}
        >
            {
                Array(50).fill(null).map((_, index) => (
                    <LinkInfo key={index}/>
                ))
            }
        </div>
    )
}