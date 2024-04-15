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
                Array(40).fill(null).map((_, index) => (
                    <LinkInfo data={{ realUrl: 'http://localhost:3000/dashboard', urlsId: 'jbaby' }} key={index}/>
                ))
            }
        </div>
    )
}