import * as constant from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.INPUT_FOCUSED:
            return state.set('focused', true);
        case constant.INPUT_BLUR:
            return state.set('focused', false);
        case constant.GET_LIST:
            return state.merge({
                list: action.value,
                totalPage: action.totalPage
            });
        case constant.HANDEL_MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constant.HANDEL_MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constant.CHANGE_PAGE:
            return state.set('page', action.value);
        default:
            return state;
    }
}