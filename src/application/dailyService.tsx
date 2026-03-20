import { getDailies,createDaily } from "../infrastructure/repositories/dailyrepository";

// 日記の取得
export const fetchDailies = async () => {
    return await getDailies();
};

// 日記の作成
export const addDaily = async (title:string,color:string,content:string) => {
    if(!title){
        throw new Error("タイトルをつけてください");
    }
    if(!color){
        throw new Error("色を選択してください");
    }
    return await createDaily(title,color,content);
};