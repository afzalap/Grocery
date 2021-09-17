import { ADD_ITEM, DELETE_ITEM } from "../action/action.types";

const initialState = {
    list : [],
    filterdList : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                list :[...state.list, action.payload],
                filterdList: [...state.filterdList, action.payload],
            }

        case DELETE_ITEM:
            return {
                list: state.list.filter((item) => item.itemName !== action.payload),
                filterdList: state.filterdList.filter((item) => item.itemName !== action.payload),
            }  

        default: {
            return state
        }
            
    }
}