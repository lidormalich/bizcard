import Card from "./CardInterface";

export default interface FavoriteInterface {
    id?: number,
    userId: number,
    cards: Card[],
}