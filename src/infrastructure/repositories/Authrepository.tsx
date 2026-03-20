import { supabase } from '../supabaseClient';

// サインアップ
export const signUp = async (email: string, password: string) => {
    const { data, error} = await supabase.auth.signUp({email,password})
    if(error) {
        throw error
    }
    return data
}

// ログイン
export const signIn = async (email: string, password: string) => {
    const { data, error} = await supabase.auth.signInWithPassword({email,password})
    if(error) {
        throw error
    } 
    return data
}

// ログアウト
export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if(error) {
        throw error
    }
}

// ログインユーザー取得
export const getLoggedInUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    if(error) {
        throw error
    }
    return data.user
}
