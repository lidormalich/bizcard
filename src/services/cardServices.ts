import axios from "axios";
import Card from "../interface/Card";

let api = process.env.REACT_APP_API + "/cards" || "";

// export function checkUser(usertoCheck: Card) {
//     return axios.get(`${api}?email=${usertoCheck.email}&password=${usertoCheck.password}`);
// }
export function getSpicificCard(cardID: Number) {
    return axios.get(`${api}/${cardID}`);
}
export function getAllCard() {
    return axios.get(api);
}
export function getAllUserCards(userId: number) {
    return axios.get(`${api}?userId=${userId}`);
}
export function addCard(cardToAdd: Card) {
    return axios.post(api, cardToAdd);
}
export function deleteCard() {
    return axios.delete(api);
}