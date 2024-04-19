import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"
import { SideBarNavigation } from "./SideBarNavigation"
import { UserData } from "./UserData"

export const Sidebar: BaseComponentType = ({ className, ...props }) => {
    return (
        <aside
            className={
                clsx(
                    "sticky top-0 z-50 flex flex-col items-center p-2 sm:p-4 h-dvh bg-white",
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
                <UserData />
            </footer>
        </aside>
    )
}