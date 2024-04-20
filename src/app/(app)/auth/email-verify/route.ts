import { frontRoutes } from "@/models/routes.model"
import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {

    const requestUrl = new URL(request.url)
    const sessionCode = requestUrl.searchParams.get('code')
    const urlOrigin = requestUrl.origin

    if (sessionCode != null) {
        const supabase = createClient()
        await supabase.auth.exchangeCodeForSession(sessionCode)
    }

    return NextResponse.redirect(urlOrigin + frontRoutes.dashboard.path)
}