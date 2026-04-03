import { getDailies,createDaily, getDailyByDate ,updateDaily} from "../infrastructure/repositories/dailyrepository";
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

    let imageUrl = "";
    if(todayPost.length > 0 ){
        imageUrl = todayPost[0].imageUrl || "";
    if(image){
        imageUrl= await uploadImage(image)
    }
    console.log("updateDaily");
    return await updateDaily(todayPost[0].id,title,color,content,imageUrl);

    }else{
    if(image){
        imageUrl= await uploadImage(image)
    }
    return await createDaily(title,color,content,imageUrl);
    }
};

// 日記の取得（特定の日付）
export const fetchDailyByDate = async (date:string) => {
    return await getDailyByDate(date);
};