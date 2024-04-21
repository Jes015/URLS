'use server'
import { AuthModalFormSchemaType } from "@/components/feat/AuthModal/models/auth-modal-form.model"
import { createClient } from "@/utils/supabase/server"

export const getUserServer = async () => {
    const supabase = createClient()

    const userResponse = await supabase.auth.getUser()

    const user = userResponse.data.user

    return user

}

export const signIn = async (formData: AuthModalFormSchemaType) => {
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

export const signUp = async (formData: AuthModalFormSchemaType) => {
    const supabase = createClient()

    const { error, data } = await supabase.auth.signUp(formData)

    const response = {
        message: error?.message ?? 'Something went wrong',
        statusCode: error?.status ?? 500
    }

    if (data.user != null) {
        response.message = 'Signed up, verify with your email'
        response.statusCode = 200
    }

    return response
}

export const signOut = async () => {
    const supabase = createClient()
    
    const { error } = await supabase.auth.signOut()

    let response = {
        message: error?.message ?? 'Something went wrong',
        statusCode: error?.status ?? 500
    }

    if (error == null) {
        response.message = 'Signed out'
        response.statusCode = 200
    }

    return response
}