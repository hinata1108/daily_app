import {supabase} from '../supabaseClient';
import { getLoginUser } from './auth-Repository' 
import { getJSTDate } from '../../constant/getJSTDate';

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

// 日記の取得（特定の日付）
export const getDailyByDate = async (date:string) => {
    const user = await getLoginUser()
    const {data,error} = await supabase.from('dailies').select("*").eq('date', date).eq('user_id', user.id)
    if(error) {
        throw error
    }
    return data
}

// 日記の作成
export const createDaily = async (title:string,color:string,memo?:string,imageUrl?:string) => {
    const user = await getLoginUser()
    const date = getJSTDate()
    const {data, error} = await supabase
        .from('dailies').insert({title,color,memo,imageUrl,user_id:user.id,date:date}).select().single()
    if(error) {
        throw error
    }
    return data
}

// 日記の更新
export const updateDaily = async (id:string,title:string,color:string,memo?:string,imageUrl?:string) => {
    const {data,error} = await supabase.from('dailies').update({title,color,memo,imageUrl}).eq('id', id).select();
    console.log("updated daily:",title, memo)
    if(error) {
        throw error
    }
    return data
}