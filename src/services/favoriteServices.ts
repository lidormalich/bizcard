import axios from "axios";

let api = process.env.REACT_APP_API + "/favorite" || "";

// add product to user's favorite
export async function addCardToFavorite(cardId: number) {
    // let cardsArr: number[] = [];
    // let favoriteId: number = 0;
    // let userId: number = JSON.parse(
    //     sessionStorage.getItem("userData") as string
    // ).userID;

    // // get user favorite (and save his cards)
    // try {
    //     let res = await axios.get(`${api}?userId=${userId}`);
    //     cardsArr = res.data[0].cards;
    //     favoriteId = res.data[0].id;
    //     cardsArr.push(cardId);
    //     return axios.patch(`${api}/${favoriteId}`, { cards: cardsArr });
    // } catch (error) {
    //     console.log(error);
    // }
}
// Remove
export async function removeCardFromFavorite(cardIdToRemove: number) {
    // let cardsArr: number[] = [];
    // let favoriteId: number = 0;
    // let userId: number = JSON.parse(
    //     sessionStorage.getItem("userData") as string
    // ).userID;

    // // get user favorite (and save his cards)
    // try {
    //     let res = await axios.get(`${api}?userId=${userId}`);
    //     cardsArr = res.data[0].cards;
    //     favoriteId = res.data[0].id;
    //     // Remove the item from arr
    //     let index = cardsArr.indexOf(cardIdToRemove);
    //     cardsArr.splice(index, 1);;

    //     // now update with my arr
    //     return axios.patch(`${api}/${favoriteId}`, { cards: cardsArr });
    // } catch (error) {
    //     console.log(error);
    // }
}
export async function getAllCardsFavorite() {
    // let cardsArr: number[] = [];
    // let favoriteId: number = 0;
    // let userId: number = JSON.parse(
    //     sessionStorage.getItem("userData") as string
    // ).userID;

    // // get user favorite (and save his cards)
    // try {
    //     let res = await axios.get(`${api}?userId=${userId}`);
    //     cardsArr = res.data[0].cards;
    //     return cardsArr;

    // } catch (error) {
    //     console.log(error);
    // }
}