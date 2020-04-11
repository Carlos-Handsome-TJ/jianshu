import { fromJS } from "immutable";
import { constants } from "./index";

const defaultState = fromJS({
    detailList: []
})

export default (state = defaultState, action) => {
    if (action.type === constants.GET_DETAIL_CONTENT) {
        return state.set('detailList', action.detail)
    }
    return state;
}