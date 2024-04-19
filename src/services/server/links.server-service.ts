'use server'
import { CreateLinkDto, Link, LinkArray } from "@/models/link.model"
import { createClient } from "@/utils/supabase/server"
import { getUserServer } from "./auth.server-service"

export const addLink = async (link: CreateLinkDto) => {
    const supabase = createClient()

    const user = await getUserServer()

    let customResponse = {
        message: 'Log in, please',
        statusCode: 401
    }

    //@
    if (user != null) {
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

export const getUserLinks = async (searchParam: string): Promise<LinkArray> => {
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
            ?.ilike('urlsid', `%${searchParam}%`)
            
        } else {
            response = await supabase
                .from('user_links')
                .select('*')
                .eq('user_id', user.id)
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

const getPublicLinks = () => { }