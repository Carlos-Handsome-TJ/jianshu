import {fromJS} from "immutable";
import * as constants  from "./constants";
const getHomeList = (data) => ({
    type: constants.GET_HOME_DATA,
    imgList: fromJS(data.imgList),
    topicList: fromJS(data.topicList),
    contentList: fromJS(data.contentList),
    boardList: fromJS(data.boardList)
});
export const getHomeData = (data) => {
    return (dispatch) => {
        const action = getHomeList(data);
        dispatch(action);
    }
};