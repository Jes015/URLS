'use server'
import { CreateLinkDto, Link, LinkArray } from "@/models/link.model"
import { createClient } from "@/utils/supabase/server"
import { getUserServer } from "./auth.server-service"

export const addLink = async (link: Omit<CreateLinkDto, 'user_id'>) => {
    const supabase = createClient()

    const user = await getUserServer()

    let customResponse = {
        message: 'Log in, please',
        statusCode: 401
    }


    if (user != null) {
        const userLinks = await supabase
            .from('user_links')
            .select('*')
            .eq('user_id', user.id)

        if (userLinks.data?.length != null && userLinks.data.length >= 40 ) {
            customResponse.statusCode = 403
            customResponse.message = 'Only 40 urls per user'
        } else {
            const response = await supabase
                .from('user_links')
                .insert<CreateLinkDto>({
                    ...link,
                    user_id: user.id
                })

            if (response.error != null) {
                customResponse.statusCode = 500
                customResponse.message = response.error.message
            }
            else {
                customResponse.statusCode = 200
                customResponse.message = 'Url added'
            }
        }

    }

    return customResponse
}

export const removeLink = async (urlsId: string) => {
    const supabase = createClient()

    const user = await getUserServer()

    let customResponse = {
        message: 'Log in, please',
        statusCode: 401
    }

    if (user != null) {
        const response = await supabase
            .from('user_links')
            .delete()
            .eq('urlsid', urlsId)

        if (response.error != null) {
            customResponse.statusCode = 500
            customResponse.message = response.error.message
        }
        else {
            customResponse.statusCode = 200
            customResponse.message = 'Url deleted'
        }
    }

    return customResponse
}

export const getUserLinks = async (searchParam: string | null): Promise<LinkArray> => {
    const supabase = createClient()

    const user = await getUserServer()

    let userLinks: LinkArray = []

    if (user != null) {

        let response = null
        if (searchParam != null) {
            response = await supabase
                .from('user_links')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
                ?.ilike('urlsid', `%${searchParam}%`)

        } else {
            response = await supabase
                .from('user_links')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })
        }

        if (response?.data != null) {
            userLinks = response.data
        }
    }

    return userLinks
}

export const getOneLink = async (linkId: string): Promise<Link | null> => {
    const supabase = createClient()

    const response = await supabase
        .from('user_links')
        .select('*')
        .eq('urlsid', linkId)
        .single()

    return response.data ?? null
}

export const getPublicLinks = async (limit: number = 50) => {
    const supabase = createClient()

    let userLinks: LinkArray = []


    let response = await supabase.from('user_links')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

    if (response?.data != null) {
        userLinks = response.data
    }

    return userLinks
}