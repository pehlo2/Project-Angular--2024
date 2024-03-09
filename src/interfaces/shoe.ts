import { UserId } from "./userId"

export interface Shoe {
    "brand": string,
    "model": string,
    "size": number,
    "price": number,
    "imageUrl": string,
    "description": string,
    "subscribers": string[],
    // "posts": any //string[] |Post,
    "_id": string,
    "userId": UserId,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}
