import { Sheet } from "@/components/ui/Sheet"
import { BaseComponentType } from "@/models/component.model"
import { CopyIcon, TrashIcon } from "@radix-ui/react-icons"

export const DashboardContent: BaseComponentType = (props) => {
    return (
        <div
            className="flex flex-col gap-2"
        >
            <Sheet
                className="flex justify-between items-center p-2"
            >
                <div className="flex items-center">
                    <div className="flex items-center text-sm gap-1 ml-1 text-zinc-950">
                        <span className="font-medium">urls/<span className="text-zinc-700 font-bold">joyolababy</span></span>
                        <span className="font-semibold">to</span>
                        <a
                            href="/"
                            className="text-blue-500 decoration-solid font-semibold text-sm"
                        >
                            https://www.google.com
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-2 pr-2">
                    <button
                        aria-label="Delete url"
                        className="px-[0.8rem]"
                    >
                        <TrashIcon width={15} height={15}/>
                    </button>
                    <button
                        aria-label="Copy url"
                    >
                        <CopyIcon width={15} height={15}/>
                    </button>
                </div>
            </Sheet>
        </div>
    )
}