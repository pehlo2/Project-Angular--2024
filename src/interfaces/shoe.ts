import { UserId } from "./userId"

export interface Shoe {
    "model": string,
    "brand": string,
    "size": number,
    "price": number,
    "gender":string,
    "image": string,
    "description": string,
    "subscribers": string[],
    // "posts": any //string[] |Post,
    "_id": string,
    "userId": UserId,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}
