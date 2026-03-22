import { getDailies,createDaily } from "../infrastructure/repositories/dailyrepository";
import { uploadImage } from "../infrastructure/repositories/imageRepository";

// 日記の取得
export const fetchDailies = async () => {
    return await getDailies();
};

// 日記の作成
export const addDaily = async (title:string,color:string,content:string,image:File) => {
    if(!title){
        throw new Error("タイトルをつけてください");
    }
    if(!color){
        throw new Error("色を選択してください");
    }
    let imageUrl = "";
    if(image){
        const imageUrl= await uploadImage(image)
    }
    return await createDaily(title,color,content,imageUrl);
};