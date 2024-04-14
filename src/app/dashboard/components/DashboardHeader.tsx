'use client'
import { Sheet } from "@/components/ui/Sheet"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BaseComponentType } from "@/models/component.model"
import { ArchiveIcon, PlusIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { DashboardForm } from "./DashboardForm/DashboardForm"
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
            <Dialog>
                <DialogTrigger>
                    <Button className="flex gap-2 h-10 text-sm" aria-label="add url">
                        <PlusIcon width={14} height={14} className=" aspect-square scale-150" />
                        Add link
                    </Button>
                </DialogTrigger>
                <DialogContent className="font-sans">
                    <DialogHeader>
                        <DialogTitle>Add a link</DialogTitle>
                        <DialogDescription>
                            The url will be copied to your clipboard when you click add
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-2">
                        <DashboardForm />
                    </div>
                </DialogContent>
            </Dialog >
        </header >
    )
}