'use client'
import { LinksInfoSection } from "@/components/feat/LinksInfoSection"
import { BaseComponentProps } from "@/models/component.model"
import { LinkArray } from "@/models/link.model"
import { MoonIcon } from "@radix-ui/react-icons"
import { FC } from "react"

interface DashboardContentProps extends BaseComponentProps {
    links: LinkArray
}

export const DashboardContent: FC<DashboardContentProps> = ({ links, ...props }) => {
    return (
        links?.[0] != null
            ? <LinksInfoSection deletable {...{ links }} />
            : <div className="pt-40 h-full flex flex-col items-center">
                <MoonIcon className="text-zinc-800" width={82} height={82} />
                <span className="font-bold text-center [font-size:clamp(2rem,4vw,3rem)] text-zinc-900">No urls found</span>
            </div>
    )
}