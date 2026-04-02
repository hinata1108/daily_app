import { getDailies,createDaily, getDailyByDate } from "../infrastructure/repositories/dailyrepository";
import { uploadImage } from "../infrastructure/repositories/imageRepository";
import { getJSTDate } from "../constant/getJSTDate";

// 日記の取得
export const fetchDailies = async () => {
    return await getDailies();
};

// 日記の作成
export const addDaily = async (title:string,color:string,content:string,image:File|null) => {
    if(!title){
        throw new Error("タイトルをつけてください");
    }
    if(!color){
        throw new Error("色を選択してください");
    }
    
    const today = getJSTDate();
    const todayPost = await getDailyByDate(today);
    if(todayPost && todayPost.length > 0){
        throw new Error("今日の日記はすでに投稿されています");
    }
    let imageUrl = "";
    if(image){
        imageUrl= await uploadImage(image)
    }
    return await createDaily(title,color,content,imageUrl);
};
