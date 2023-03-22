import axios from "axios";
import UserInterface from "../interface/UserInterface";
import jwt_decode from "jwt-decode";

let api = process.env.REACT_APP_API || "";

export function checkUser(usertoCheck: UserInterface) {
    return axios.post(`${api}/login`, usertoCheck);
}
export function getUserInfo() {
    return axios.get(`${api}/me`, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } });
}
export function addUser(userToAdd: UserInterface) {
    return axios.post(api, userToAdd);
}
export function updateUserInfo(UserToUpdate: UserInterface) {
    return axios.put(`${api}/profile`, UserToUpdate)
}
// get is bis
export function isBusinessUser() {
    let token = sessionStorage.getItem("Authorization");
    return (jwt_decode(token as string) as any).isBusiness;
}
export function getUserId() {
    let token = sessionStorage.getItem("Authorization");
    return (jwt_decode(token as string) as any)._id;
}
export function getUserName() {
    return axios.get(`${api}/me/name`, { headers: { 'Authorization': sessionStorage.getItem("Authorization") } })
}