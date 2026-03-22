import {supabase} from '../supabaseClient';
import { getLoginUser } from './auth-Repository' 

// 日記の取得
export const getDailies = async () => {
    const user = await getLoginUser()
    const {data, error} = await supabase
        .from('dailies').select("*").eq('user_id', user?.id).order("created_at", { ascending: false })
        console.log("fetched dailies:", data) 
    if(error) {
        throw error
    }
    return data
}

// 日記の作成
export const createDaily = async (title:string,color:string,memo?:string,imageUrl?:string) => {
    const user = await getLoginUser()
    const {data, error} = await supabase
        .from('dailies').insert({title,color,memo,imageUrl,user_id:user.id})
    if(error) {
        throw error
    }
    return data
}