'use client'
import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import { Link } from "@/models/link.model"
import { getUrlsLink } from "@/utils/link.util"
import { CheckCircledIcon, CopyIcon, Link2Icon, TrashIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { forwardRef, useState } from "react"
import styles from './link-info.module.css'

export interface LinkInfoProps extends PartialSheetProps {
    data: Link
    deletable: boolean
}

export const LinkInfo = forwardRef<HTMLDivElement, LinkInfoProps>(
    (props, ref) => {

        const [copyStatus, setCopyStatus] = useState<'copying' | 'copied' | 'waiting'>('waiting')

        const handleOnClickToCopyLink = async () => {
            const urlsUrl = getUrlsLink(props.data.urlsId)

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
                                <span className="font-medium text-xs">urls/<span className="text-zinc-700 font-bold">{props.data.urlsId}</span></span>
                                <span className="font-semibold">to</span>
                                <a
                                    href="/"
                                    className="text-blue-500 decoration-solid font-semibold text-xs"
                                    target="_blank"
                                >
                                    {props.data.realUrl}
                                </a>
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