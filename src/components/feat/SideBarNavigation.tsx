'use client'
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { HomeIcon, MixIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { Link } from "../ui/Link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"


const sidebarMenu = [
    {
        ...frontRoutes.dashboard,
        icon: HomeIcon
    },
    {
        ...frontRoutes.latestLinks,
        icon: MixIcon
    }
]

export const SideBarNavigation: BaseComponentType = ({ className, ...props }) => {
    const pathname = usePathname()

    return (
        <div
            className={
                clsx(
                    "flex flex-grow flex-col gap-1 border-t pt-2",
                    className
                )
            }
            {...props}
        >
            {
                sidebarMenu.map((route) => (
                    <TooltipProvider
                        key={route.name}
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <Link
                                    className={
                                        clsx(
                                            "flex text-zinc-800 justify-center items-center p-4 bg-zinc-50 hover:bg-zinc-200 rounded-sm",
                                            pathname === route.path && '!bg-[#0f172a] !text-white'
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
    )
}