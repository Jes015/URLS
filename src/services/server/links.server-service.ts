'use server'
import { CreateLinkDto, Link, LinkArray } from "@/models/link.model"
import { createClient } from "@/utils/supabase/server"
import { getUserServer } from "./auth.server-service"

const addLink = (link: CreateLinkDto) => { }

const removeLink = () => { }

export const getUserLinks = async (): Promise<LinkArray> => {
    const supabase = createClient()

    const user = await getUserServer()

    if (user != null) {
        const response = await supabase
            .from('user_links')
            .select('*')
            .eq('user_id', user.id)

        return response.data ?? []
    }

    return []
}

export const getOneLink = async (linkId: string): Promise<Link | null> => {
    const supabase = createClient()

    console.log({ linkId })
    const response = await supabase
        .from('user_links')
        .select('*')
        .eq('urlsid', linkId)
        .single()

    return response.data ?? null
}

const getPublicLinks = () => { }