import { PageType } from "@/models/page.model"
import { getUserLinks } from "@/services/server/links.server-service"
import { DashboardContent } from "./components/DashboardContent"
import { DashboardHeader } from "./components/DashboardHeader"

const DashboardPage: PageType = async () => {
    const links = await getUserLinks()

    return (
        <div className="flex flex-col gap-2">
            <DashboardHeader />
            <DashboardContent {...{ links }} />
        </div>
    )
}

export default DashboardPage