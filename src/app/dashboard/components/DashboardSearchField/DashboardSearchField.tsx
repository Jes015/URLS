'use client'
import { PartialSheetProps, Sheet } from "@/components/ui/Sheet"
import { TextField } from "@/components/ui/TextField/TextField"
import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { FC, LegacyRef, useRef, useState } from "react"
import { useDashboardSearchField } from "./hooks/useDashboardSearchField"

export const DashboardSearchField: FC<PartialSheetProps> = ({ className, ...props }) => {
    const [currentSearchValue, setCurrentSearchValue] = useState('')
    useDashboardSearchField(currentSearchValue)

    const inputRef = useRef<HTMLInputElement>()

    const handleOnClickToCleanInput = () => {
        if (inputRef.current == null) return

        inputRef.current.value = ''
        setCurrentSearchValue('')
    }

    const handleOnInputToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value ?? ''

        setCurrentSearchValue(inputValue)
    }

    return (
        <Sheet
            as="search"
            className={
                clsx(
                    "flex-grow px-2 focus-within:outline outline-2 outline-blue-400",
                    className
                )
            }
            {...props}
        >
            <TextField direction="row" className="items-center h-full">
                <TextField.Label>
                    <MagnifyingGlassIcon width={20} height={20} />
                </TextField.Label>
                <input
                    className="outline-none w-full min-h-[38px] sm:min-h-[auto]"
                    placeholder="Search shorted urls"
                    onChange={handleOnInputToSearch}
                    ref={inputRef as LegacyRef<HTMLInputElement>}
                />
            </TextField>
            <div
                className={
                    clsx(
                        "flex items-center absolute top-0 right-0 h-full bg-blue translate-x-10 transition-transform",
                        currentSearchValue !== '' && '!translate-x-0'
                    )
                }
            >
                <button
                    aria-label="Clean search input"
                    className="px-2"
                    onClick={handleOnClickToCleanInput}
                >
                    <Cross1Icon />
                </button>
            </div>
        </Sheet>
    )
}