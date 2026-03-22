import {supabase} from "../supabaseClient";

export const uploadImage = async (file:File) => {
    const filename=`diary/${Date.now()}_${file.name}`;
    // 画像アップロード
    const {error}= await supabase.storage.from("images").upload(filename, file);
    if(error){
        throw error;
    }

    const {data}= await supabase.storage.from("images").getPublicUrl(filename);

    return data.publicUrl;
}