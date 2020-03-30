import * as constant from "./constants"
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === constant.INPUT_FOCUSED) {
        return {
            focused: true
        }
    }
    if (action.type === constant.INPUT_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}