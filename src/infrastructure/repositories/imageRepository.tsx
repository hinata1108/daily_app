import {supabase} from "../supabaseClient";

export const uploadImage = async (file:File) => {
    const ext= file.name.split('.').pop();
    const filename = `daily/${Date.now()}.${ext}`;
    // 画像アップロード
    const {error}= await supabase.storage.from("images").upload(filename, file);
    if(error){
        throw error;
    }

    const {data}= await supabase.storage.from("images").getPublicUrl(filename);

    return data.publicUrl;
}