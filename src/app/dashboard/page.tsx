import { PageType } from "@/models/page.model"
import { getUserLinks } from "@/services/server/links.server-service"
import { DashboardContent } from "./components/DashboardContent"
import { DashboardHeader } from "./components/DashboardHeader"

const DashboardPage: PageType = async ({ searchParams }) => {
    const searchParam = searchParams?.q

    const links = await getUserLinks(searchParam)

    return (
        <div className="flex flex-col gap-2">
            <DashboardHeader linksCount={links.length} />
            <DashboardContent {...{ links }} />
        </div>
    )
}

export default DashboardPage