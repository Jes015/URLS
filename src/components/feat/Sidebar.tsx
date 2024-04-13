import { BaseComponentType } from "@/models/component.model"
import { PersonIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { SideBarNavigation } from "./SideBarNavigation"

export const Sidebar: BaseComponentType = ({ className, ...props }) => {
    return (
        <aside
            className={
                clsx(
                    "flex flex-col items-center p-4 h-dvh",
                    className
                )
            }
            {...props}
        >
            <header>
                <span className="font-semibold">URLS</span>
            </header>
            <SideBarNavigation />
            <footer>
                <div className="bg-black/90 text-white p-2 rounded-full">
                    <PersonIcon width={20} height={20} />
                </div>
            </footer>
        </aside>
    )
}