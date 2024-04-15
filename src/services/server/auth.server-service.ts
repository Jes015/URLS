'use server'

import { createClient } from "@/utils/supabase/server"

export const checkAuthStatus = async () => {
    const supabase = createClient()

    const userResponse = await supabase.auth.getUser()

    const isAuth = userResponse.data.user

    return isAuth

}

export const signIn = () => {
    const supabase = createClient()
}

export const signOut = () => {}

export const signUp = () => {}