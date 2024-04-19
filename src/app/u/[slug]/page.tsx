import { PageType } from "@/models/page.model"
import { getOneLink } from "@/services/server/links.server-service"
import { redirect } from "next/navigation"

const UPage: PageType = async ({ params }) => {

    const slug = await getOneLink(params.slug)

    redirect(slug?.realurl ?? '/not-found')
}

export default UPage