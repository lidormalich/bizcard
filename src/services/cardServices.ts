import axios from "axios";
import Card from "../interface/CardInterface";

let api = process.env.REACT_APP_API + "/cards" || "";


export function getSpicificCard(cardID: string, auth: string) {
    return axios.get(`${api}/${cardID}`, { headers: { 'Authorization': auth } });
}
export function getAllCard() {
    return axios.get(api);
}
export function getAllUserCards(auth: string) {
    console.log(auth);

    return axios.get(`${api}/user`, { headers: { 'Authorization': auth } });
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