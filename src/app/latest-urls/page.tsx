import { LinksInfoSection } from "@/components/feat/LinksInfoSection"
import { Sheet } from "@/components/ui/Sheet"
import { PageType } from "@/models/page.model"

const LatestUrlsPage: PageType = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between">
                <Sheet
                    as="header"
                    className="px-4 flex items-center"
                >
                    <h3 className="text-xs font-semibold">Latest urls</h3>
                </Sheet>
                <Sheet
                    as="header"
                    className="text-xs px-2"
                >
                    <a
                        href="https://www.web-capture.online/"
                        target="_blank"
                        className="text-blue-500"
                    >
                        Web Capture
                    </a>
                    <span className="text-zinc-500 text-[0.6rem]"> - Latest project. Video recorder by the browser</span>
                </Sheet>
            </div>
            <LinksInfoSection deletable={false} links={Array(40)} />
        </div>
    )
}

export default LatestUrlsPage