import axios from "axios";
import UserInterface from "../interface/UserInterface";

let api = process.env.REACT_APP_API || "";

export function checkUser(usertoCheck: UserInterface) {
    return axios.post(`${api}/login`, usertoCheck);
}
export function getUserInfo(userIDtoCheck: Number) {
    return axios.get(`${api}/${userIDtoCheck}`);
}
export function addUser(userToAdd: UserInterface) {
    return axios.post(api, userToAdd);
}
export function updateUserInfo(id: number, UserToUpdate: UserInterface) {
    return axios.put(`${api}/${id}`, UserToUpdate)
}
// get is bis
export function isBusinessUser() {
    return axios.get(`${api}/me/isBusiness`, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } })
}