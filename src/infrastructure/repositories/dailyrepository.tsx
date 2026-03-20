import {supabase} from '../supabaseClient';

// 日記の取得
export const getDailies = async () => {
    const {data, error} = await supabase
        .from('dailies').select("*").order("created_at",{ascending: false})
    if(error) {
        throw error
    }
    return data
}

// 日記の作成
export const createDaily = async (title:string,color:string,content:string) => {
    const {data, error} = await supabase
        .from('dailies').insert({title,color,content})
    if(error) {
        throw error
    }
    return data
}