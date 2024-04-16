'use client'
import { LinksInfoSection } from "@/components/feat/LinksInfoSection"
import { BaseComponentProps } from "@/models/component.model"
import { LinkArray } from "@/models/link.model"
import { FC } from "react"

interface DashboardContentProps extends BaseComponentProps {
    links: LinkArray
}

export const DashboardContent: FC<DashboardContentProps> = ({ links, ...props }) => {
    return (
        <LinksInfoSection deletable {...{ links }} />
    )
}