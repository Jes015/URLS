import { PageType } from "@/models/page.model"
import { getUserServer } from "@/services/server/auth.server-service"
import { getUserLinks } from "@/services/server/links.server-service"
import { DashboardContent } from "./components/DashboardContent"
import { DashboardHeader } from "./components/DashboardHeader"

export const metadata = {
    title: 'Dashboard'
}

const DashboardPage: PageType = async ({ searchParams }) => {

    const searchParam = searchParams?.q || null

    const user = await getUserServer()

    const links = user?.email == null ? [] : await getUserLinks(searchParam)

    return (
        <div className="flex flex-col gap-2">
            <DashboardHeader linksCount={links.length} />
            <DashboardContent {...{ links }} />
        </div>
    )
}

export default DashboardPage