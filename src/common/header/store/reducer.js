import * as constant from "./constants";
import { fromJS } from "immutable";

const defaultState =fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if (action.type === constant.INPUT_FOCUSED) {
        return state.set('focused', true);
    }
    if (action.type === constant.INPUT_BLUR) {
        return state.set('focused', false);
    }
    return state;
}