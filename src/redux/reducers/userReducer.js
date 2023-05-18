import { actionType } from "../constants/actionsTypes";

// Check if user data exists in localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: storedUser || null, // Use stored user data if available
};

export const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.ADD_USERINFO:
            // Save user data to localStorage
            localStorage.setItem("user", JSON.stringify(payload));
            return {
                ...state,
                user: payload,
            };
        case actionType.REMOVE_USERINFO:
            // Remove user data from localStorage
            localStorage.removeItem("user");
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

