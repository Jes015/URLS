'use client'
import { CircularLoading } from "@/components/ui/CircularLoading"
import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useRouting } from "@/hooks/useRouting"
import { Link } from "@/models/link.model"
import { ToastType } from "@/models/toast.model"
import { removeLink } from "@/services/server/links.server-service"
import { getUrlsLink } from "@/utils/link.util"
import { CheckCircledIcon, CopyIcon, Link2Icon, TrashIcon } from "@radix-ui/react-icons"
import { forwardRef, useState } from "react"
import { toast } from "sonner"

export interface LinkInfoProps extends PartialSheetProps {
    data: Link
    deletable: boolean
}

export const LinkInfo = forwardRef<HTMLDivElement, LinkInfoProps>(
    (props, ref) => {

        const [copyStatus, setCopyStatus] = useState<'loading' | 'copied' | 'waiting'>('waiting')

        const { refresh } = useRouting()

        const handleOnClickToCopyLink = async () => {
            const urlsUrl = getUrlsLink(props.data.urlsid)

            navigator.clipboard.writeText(urlsUrl)
                .finally(() => {
                    setCopyStatus('copied')

                    setTimeout(() => {
                        setCopyStatus('waiting')
                    }, 1000)
                })
        }

        const handleOnClickToDeleteLink = async () => {
            setCopyStatus('loading')
            const { message, statusCode } = await removeLink(props.data.urlsid)

            let toastType: ToastType = 'success'

            if (statusCode <= 199 || statusCode >= 300) {
                toastType = 'error'
            } else {
                refresh()
            }

            toast[toastType](message)
        }

        return (
            <Sheet
                className="flex items-center p-2"
                {...{ ref, ...props }}
            >
                <div className="flex items-center flex-grow overflow-clip">
                    <div className="flex items-center text-sm gap-1 ml-1 text-zinc-950">
                        <Link2Icon className="flex-shrink-0" width={18} height={18} />
                        <div
                            className="flex-grow overflow-clip relative flex-shrink-0"
                        >
                            <div
                                className="flex items-center gap-1 text-sm flex-shrink-0"
                            >
                                <span className="font-medium text-xs">urls/<span className="text-zinc-700 font-bold flex-shrink-0">{props.data.urlsid}</span></span>
                                <span className="font-semibold">to</span>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a
                                                href={props.data.realurl}
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
                                className="p-2 rounded-sm hover:bg-neutral-100 w-[32.98px] h-[32.98px] flex justify-center items-center"
                                onClick={handleOnClickToDeleteLink}
                                disabled={copyStatus === 'loading'}
                            >

                                {(copyStatus === 'waiting' || copyStatus === 'copied') && <TrashIcon width={17} height={17} />}
                                {copyStatus === 'loading' && <div className="scale-50"><CircularLoading className="!w-17 !h-17 !border-zinc-800" /></div>}
                            </button>
                        )
                    }
                    <button
                        aria-label="Copy url"
                        className="p-2 rounded-sm hover:bg-neutral-100 h-full cursor-pointer"
                        onClick={handleOnClickToCopyLink}
                    >
                        {(copyStatus === 'waiting' || copyStatus === 'loading') && <CopyIcon width={17} height={17} />}
                        {copyStatus === 'copied' && <CheckCircledIcon width={17} height={17} className="text-green-500" />}
                    </button>
                </div>
            </Sheet>
        )
    }
)

LinkInfo.displayName = 'LinkInfo'