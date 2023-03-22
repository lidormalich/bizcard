import axios from "axios";
import Card from "../interface/CardInterface";

let api = process.env.REACT_APP_API + "/cards" || "";


export function getSpicificCard(cardID: string, auth: string) {
    return axios.get(`${api}/${cardID}`, { headers: { 'Authorization': auth } });
}
export function getAllCard() {
    return axios.get(api, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } });
}
export function getAllUserCards(auth: string) {
    return axios.get(`${api}/user`, { headers: { 'Authorization': auth } });
}
export function addCard(cardToAdd: Card) {
    return axios.post(api, cardToAdd, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } });
}
export function updateCard(id: string, cradToUpdate: Card) {
    return axios.put(`${api}/${id}`, cradToUpdate, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } })
}
export function deleteCard(id: string) {
    return axios.delete(`${api}/${id}`, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } });
}