import { MoonIcon } from "@radix-ui/react-icons"

const NotFoundPage = () => {
    return (
        <div className="pt-40 h-full flex flex-col items-center">
            <MoonIcon className="text-zinc-800" width={82} height={82}/>
            <span className="font-bold text-center [font-size:clamp(2rem,4vw,3rem)] text-zinc-900">Not found</span>
        </div>
    )
}

export default NotFoundPage