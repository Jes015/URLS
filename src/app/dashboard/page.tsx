import { PageType } from "@/models/page.model"
import { DashboardContent } from "./components/DashboardContent"
import { DashboardHeader } from "./components/DashboardHeader"

const DashboardPage: PageType = () => {
    return (
        <div className="flex flex-col gap-2">
            <DashboardHeader />
            <DashboardContent />
        </div>
    )
}

export default DashboardPage