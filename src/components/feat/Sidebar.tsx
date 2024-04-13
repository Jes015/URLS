import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { DashboardIcon, HomeIcon, MixIcon, PersonIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { Link } from "../ui/Link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

const sidebarMenu = [
    {
        ...frontRoutes.home,
        icon: HomeIcon
    },
    {
        ...frontRoutes.dashboard,
        icon: DashboardIcon
    },
    {
        ...frontRoutes.latestLinks,
        icon: MixIcon
    }
]

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
            <div className="flex flex-grow flex-col gap-1 border-t pt-2">
                {
                    sidebarMenu.map((route, index) => (
                        <TooltipProvider
                            key={route.name}
                        >
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link
                                        className={
                                            clsx(
                                                "flex text-zinc-800 justify-center items-center p-4 bg-zinc-50 hover:bg-zinc-200 rounded-sm",
                                                index === 1 && '!bg-[#0f172a] !text-white'
                                            )
                                        }
                                        href={route.path}
                                    >
                                        <route.icon width={19} height={19} />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent align="center" side="right">
                                    {route.name}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))
                }
            </div>
            <footer>
                <div className="bg-black/90 text-white p-2 rounded-full">
                    <PersonIcon width={20} height={20}/>
                </div>
            </footer>
        </aside>
    )
}