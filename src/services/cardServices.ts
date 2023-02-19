import axios from "axios";
import Card from "../interfaces/Card";

const api: string = process.env.REACT_APP_API + "/cards" || "";

// add Card
export function addCard(newCard: Card) {
    return axios.post(api, newCard);
}
// get Cards
export function getCardsById(id: number) {
    return axios.get(`${api}/${id}`);
}
// get All Cards
export function getAllCards() {
    return axios.get(api);
}

// delete Card
export function deleteCard(id: number) {
    return axios.delete(`${api}/${id}`);
}

// delete Card
export function updateCard(newCard: Card) {
    return axios.put(`${api}/${newCard.id}`, newCard);
}


