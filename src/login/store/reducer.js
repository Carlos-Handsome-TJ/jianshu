import { fromJS } from "immutable";
import { constants } from "./index"

const defaultState = fromJS({
    login: false,
    value: '',
    password: ''
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN_TRUE:
            return state.set('login', true);
        case constants.CHANGE_LOGIN_FALSE:
            return state.set('login', false);
        case constants.GET_ACCOUNT_VALUE:
            return state.set('value', action.value);
        case constants.GET_PASSWORD_VALUE:
            return state.set('password', action.value)
        default:
            return state;
    }
}