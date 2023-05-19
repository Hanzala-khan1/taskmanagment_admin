import { actionType } from "../constants/actionsTypes";
const storedUser = JSON.parse(localStorage.getItem("user"));
if (storedUser) {
    // User data is stored in the local storage
    const user = storedUser;
    console.log("hhhhhhhhhh", user)
    // Perform actions with the user data
} else {
    console.log("error ha ")
    // User data is not stored in the local storage
    // Handle the case where the user is not logged in
}
const initialState = {
    user: storedUser || null, // Use stored user data if available
};
// Check if user data exists in localStorage

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
