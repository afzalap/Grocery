import { ADD_ITEM, DELETE_ITEM } from "./action.types";

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})

export const deleteItem = (itemName) => ({
    type: DELETE_ITEM,
    payload: itemName
})