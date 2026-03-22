import { uploadImage } from "../infrastructure/repositories/imageRepository";

// 画像のアップロード
export const uploadImageFile = async (file: File) => {
    const imageURL = await uploadImage(file);
    return imageURL;
}