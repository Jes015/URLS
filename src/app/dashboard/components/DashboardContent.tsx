'use client'
import { LinksInfoSection } from "@/components/feat/LinksInfoSection"
import { BaseComponentType } from "@/models/component.model"

export const DashboardContent: BaseComponentType = (props) => {
    return (
        <LinksInfoSection deletable links={Array(40)} />
    )
}