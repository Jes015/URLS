import { Sheet } from "@/components/ui/Sheet"
import { Button } from "@/components/ui/button"
import { BaseComponentType } from "@/models/component.model"
import { ArchiveIcon, PlusIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
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
                01/50
            </Sheet>
            <Button className="flex gap-2 h-10 text-sm" aria-label="add url">
                <PlusIcon width={14} height={14} className=" aspect-square scale-150" />
                Add link
            </Button>
        </header >
    )
}