import { PageType } from "@/models/page.model"
import { frontRoutes } from "@/models/routes.model"
import { redirect } from "next/navigation"

const HomePage: PageType = () => {
    redirect(frontRoutes.dashboard.path)
}

export default HomePage