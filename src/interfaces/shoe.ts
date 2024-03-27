import { CartItems } from "./cartItems"
import { UserId } from "./userId"

export interface Shoe {
    "model": string,
    "brand": string,
    "size": number,
    "price": number,
    "gender": string,
    "image": string,
    "description": string,
    "subscribers": string[],
    "ownerId": string
    "buyers": CartItems[]
    "_id": string,
    "userId": UserId,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}

export interface ShoePaginated {
    "shoes": Shoe[],
    "currentPage": number,
    "totalPages": number,
    "count": number,
    'limit': number

}
