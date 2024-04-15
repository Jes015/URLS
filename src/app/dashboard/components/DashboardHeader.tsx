'use client'
import { Sheet } from "@/components/ui/Sheet"
import { BaseComponentType } from "@/models/component.model"
import { ArchiveIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { DashboardFormModal } from "./DashboardFormModal"
import { DashboardSearchField } from "./DashboardSearchField/DashboardSearchField"

export const DashboardHeader: BaseComponentType = ({ className, ...props }) => {
    return (
        <header
            className={
                clsx(
                    "flex items-stretch justify-end w-full gap-2",
                    className
                )
            }
            {...props}
        >
            <DashboardSearchField />
            <Sheet
                className="bg-white flex items-center gap-2 text-xs font-mono font-semibold px-4"
            >
                <ArchiveIcon className="text-black" width={18} height={18} />
                01/40
            </Sheet>
            <DashboardFormModal />
        </header >
    )
}