'use client'
import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Link } from "@/models/link.model"
import { getUrlsLink } from "@/utils/link.util"
import { CheckCircledIcon, CopyIcon, Link2Icon, TrashIcon } from "@radix-ui/react-icons"
import { forwardRef, useState } from "react"

export interface LinkInfoProps extends PartialSheetProps {
    data: Link
    deletable: boolean
}

export const LinkInfo = forwardRef<HTMLDivElement, LinkInfoProps>(
    (props, ref) => {

        console.log({ data: props.data })

        const [copyStatus, setCopyStatus] = useState<'copying' | 'copied' | 'waiting'>('waiting')

        const handleOnClickToCopyLink = async () => {
            const urlsUrl = getUrlsLink(props.data.urlsid)

            setCopyStatus('copying')

            navigator.clipboard.writeText(urlsUrl)
                .finally(() => {
                    setCopyStatus('copied')

                    setTimeout(() => {
                        setCopyStatus('waiting')
                    }, 1000)
                })
        }

        return (
            <Sheet
                className="flex items-center p-2"
                {...{ ref, ...props }}
            >
                <div className="flex items-center flex-grow overflow-clip">
                    <div className="flex items-center text-sm gap-1 ml-1 text-zinc-950">
                        <Link2Icon width={18} height={18} />
                        <div
                            className="flex-grow overflow-clip relative"
                        >
                            <div
                                className="flex items-center gap-1 text-sm"
                            >
                                <span className="font-medium text-xs">urls/<span className="text-zinc-700 font-bold">{props.data.urlsid}</span></span>
                                <span className="font-semibold">to</span>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a
                                                href="/"
                                                className="text-blue-500 decoration-solid font-semibold text-xs whitespace-nowrap"
                                                target="_blank"
                                            >
                                                {props.data.realurl}
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent className="w-auto">
                                            {props.data.realurl}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pl-2 border-l">
                    {
                        props.deletable && (
                            <button
                                aria-label="Delete url"
                                className="p-2 rounded-sm hover:bg-neutral-100 h-full"
                            >
                                <TrashIcon width={17} height={17} />
                            </button>
                        )
                    }
                    <button
                        aria-label="Copy url"
                        className="p-2 rounded-sm hover:bg-neutral-100 h-full"
                        onClick={handleOnClickToCopyLink}
                    >
                        {copyStatus === 'waiting' && <CopyIcon width={17} height={17} />}
                        {copyStatus === 'copying' && <CheckCircledIcon width={17} height={17} />}
                        {copyStatus === 'copied' && <CheckCircledIcon width={17} height={17} className="text-green-500" />}
                    </button>
                </div>
            </Sheet>
        )
    }
)

LinkInfo.displayName = 'LinkInfo'