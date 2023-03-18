import axios from "axios";
import Card from "../interface/CardInterface";

let api = process.env.REACT_APP_API + "/cards" || "";


export function getSpicificCard(cardID: string) {
    return axios.get(`${api}/${cardID}`);
}
export function getAllCard() {
    return axios.get(api);
}
export function getAllUserCards(token: string) {
    console.log(token);

    return axios.get(`${api}/user`, { headers: { 'Authorization': token } });
}
export function addCard(cardToAdd: Card) {
    return axios.post(api, cardToAdd);
}
export function updateCard(id: number, cradToUpdate: Card) {
    return axios.put(`${api}/${id}`, cradToUpdate)
}
export function deleteCard() {
    return axios.delete(api);
}