import { constants } from "./index"
import { fromJS } from "immutable";

const defaultState = fromJS({
    imgList: [],
    topicList: [],
    contentList: [],
    boardList: [],
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_HOME_DATA:
            return state.merge({
                imgList: action.imgList,
                topicList: action.topicList,
                contentList: action.contentList,
                boardList: action.boardList
            });
        default:
            return state;
    }
}