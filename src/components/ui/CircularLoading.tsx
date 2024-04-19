import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"

export const CircularLoading: BaseComponentType = ({ className, ...props }) => {
    return (
        <div
            className={
                clsx("w-8 h-8 border-4 border-dashed rounded-full animate-spin border-white", className)
            }
            {...props}
        ></div>
    )
}