import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { BaseComponentType } from "@/models/component.model"
import { PlusIcon } from "@radix-ui/react-icons"
import { DashboardForm } from "./DashboardForm/DashboardForm"

export const DashboardFormModal: BaseComponentType = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
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
        </Dialog>
    )
}