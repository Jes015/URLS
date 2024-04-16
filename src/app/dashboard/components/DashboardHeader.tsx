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
                    "flex items-stretch flex-col sm:flex-row justify-end w-full gap-2",
                    className
                )
            }
            {...props}
        >
            <DashboardSearchField className="order-3 sm:order-1"/>
            <div className="flex gap-2 order-2 justify-end sm:order-1 sm:flex-row">
                <Sheet
                    className="bg-white flex items-center gap-2 text-xs font-mono font-semibold px-4"
                >
                    <ArchiveIcon className="text-black" width={18} height={18} />
                    01/40
                </Sheet>
                <DashboardFormModal />
            </div>
        </header >
    )
}