import { actionType } from "../constants/actionsTypes";

export const Adduser = (user) => {
    return {
        type: actionType.ADD_USERINFO,
        payload: user
    }
}
export const Removeuser = (user) => {
    return {
        type: actionType.REMOVE_USERINFO,
        payload: user
    }
}