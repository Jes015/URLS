'use server'

import { createClient } from "@/utils/supabase/server"

interface AuthFormData {
    email: string
    password: string
}

export const getUserServer = async () => {
    const supabase = createClient()

    const userResponse = await supabase.auth.getUser()

    const isAuth = userResponse.data.user

    return isAuth

}

export const signIn = async (formData: AuthFormData) => {
    const supabase = createClient()

    const { error, data } = await supabase.auth.signInWithPassword(formData)

    const response = {
        message: error?.message ?? 'Something went wrong',
        statusCode: error?.status ?? 500
    }

    if (data.user != null) {
        response.message = 'Success login'
        response.statusCode = 200
    }

    return response
}

export const signUp = async (formData: AuthFormData) => {
    const supabase = createClient()

    const { error } = await supabase.auth.signUp(formData)

    console.log({ error })
    const response = {
        message: error?.message ?? 'Something went wrong',
        statusCode: error?.status ?? 500
    }

    return response
}

export const signOut = () => { }