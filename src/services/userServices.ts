import axios from "axios";
import User from "../interfaces/User";

const api: string = process.env.REACT_APP_API + "/users" || "";


export function checkUser(userToCheck: User) {
    return axios.get(
        `${api}?email=${userToCheck.email}&password=${userToCheck.password}`
    );
}
// add user
export function addUser(userToAdd: User) {
    return axios.post(api, userToAdd)
}
// get user
export function getUserById(id: number) {
    return axios.get(`${api}/${id}`);
}
export async function addCardToFavorites(cardId: number, user: User) {
    let myCards: number[] = user.myCards?.length ? [...user.myCards, cardId] : [cardId];
    try {
        return axios.patch(`${api}/${user.id}`, { myCards });
    } catch (error) {
        console.log(error);
    }
}
export function createMyCards(userId: number) {
    return axios.patch(`${api}/${userId}`, {
        myCards: [],
    });

}
export function removeFromFavorites(cardId: number, user: User) {
    let myCards = user.myCards;
    myCards?.splice(myCards?.indexOf(cardId), 1);
    return axios.patch(`${api}/${user.id}`, { myCards });
}