import { BaseComponentType } from "@/models/component.model"
import { HomeIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { Button } from "../ui/button"

export const Sidebar: BaseComponentType = ({ className, ...props }) => {
    return (
        <aside
            className={
                clsx(
                    "flex flex-col items-center p-4",
                    className
                )
            }
            {...props}
        >
            <header>
                <span className="font-semibold">URLS</span>
            </header>
            <div className="flex flex-col gap-1">
                <HomeIcon width={24} height={24} />
                <Button>A</Button>

            </div>
        </aside>
    )
}