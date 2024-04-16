'use client'
import { BaseComponentProps } from "@/models/component.model"
import { LinkArray } from "@/models/link.model"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { FC } from "react"
import { LinkInfo } from "./LinkInfo/LinkInfo"

interface LinksInfoSectionProps extends BaseComponentProps {
    links: LinkArray
    deletable: boolean
}

export const LinksInfoSection: FC<LinksInfoSectionProps> = ({ links, deletable, ...props }) => {
    const [parent] = useAutoAnimate()

    return (
        <div
            className="grid xs:grid-cols-1 min-[900px]:grid-cols-2 xl:grid-cols-3 gap-2"
            ref={parent}
            {...props}
        >
            {
                links.map((link) => (
                    <LinkInfo
                        key={link.urlsid}
                        data={link}
                        {...{ deletable }}
                    />
                ))
            }
        </div>
    )
}