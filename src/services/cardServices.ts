import axios from "axios";
import Card from "../interface/Card";

let api = process.env.REACT_APP_API + "/cards" || "";

// export function checkUser(usertoCheck: Card) {
//     return axios.get(`${api}?email=${usertoCheck.email}&password=${usertoCheck.password}`);
// }
export function getCard(userIDtoCheck: Number) {
    return axios.get(`${api}/${userIDtoCheck}`);
}
export function addCard(cardToAdd: Card) {
    return axios.post(api, cardToAdd);
}