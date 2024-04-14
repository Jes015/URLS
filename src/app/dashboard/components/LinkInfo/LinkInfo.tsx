import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import { CopyIcon, Link2Icon, TrashIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { forwardRef } from "react"
import styles from './link-info.module.css'

export const LinkInfo = forwardRef<HTMLDivElement, PartialSheetProps>(
    (props, ref) => {
        return (
            <Sheet
                className="flex items-center p-2"
                {...{ ref, ...props }}
            >
                <div className="flex items-center flex-grow overflow-clip">
                    <div className="flex items-center text-sm gap-1 ml-1 text-zinc-950">
                        <Link2Icon width={18} height={18} />
                        <div
                            className={
                                clsx(
                                    "flex-grow overflow-clip relative",
                                    styles['link-info__text']
                                )
                            }
                        >
                            <div
                                className="flex items-center gap-1 text-sm hover:-translate-x-1/4 [transition-duration:0.3s]"
                            >
                                <span className="font-medium text-xs">urls/<span className="text-zinc-700 font-bold">joyolababy</span></span>
                                <span className="font-semibold">to</span>
                                <a
                                    href="/"
                                    className="text-blue-500 decoration-solid font-semibold text-xs"
                                    target="_blank"
                                >
                                    http://localhost:3000/dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pl-2 border-l">
                    <button
                        aria-label="Delete url"
                        className="p-2 rounded-sm hover:bg-neutral-100 h-full"
                    >
                        <TrashIcon width={17} height={17} />
                    </button>
                    <button
                        aria-label="Copy url"
                        className="p-2 rounded-sm hover:bg-neutral-100 h-full"
                    >
                        <CopyIcon width={17} height={17} />
                    </button>
                </div>
            </Sheet>
        )
    }
)

LinkInfo.displayName = 'LinkInfo'