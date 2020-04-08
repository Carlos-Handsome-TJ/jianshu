import {fromJS} from "immutable";
import * as constants  from "./constants";
import axios from "axios";

const getHomeList = (data) => ({
    type: constants.GET_HOME_DATA,
    imgList: fromJS(data.imgList),
    topicList: fromJS(data.topicList),
    contentList: fromJS(data.contentList),
    boardList: fromJS(data.boardList),
    recommendList: fromJS(data.recommendList),
    page: fromJS(1),
    totalPage: fromJS(Math.ceil(data.recommendList.length / 4))
});
export const getHomeData = () => {
    return (dispatch) => {
        axios.get("./api/home.json").then((res) => {
            const data = res.data;
            if (data.status) {
                const action = getHomeList(data);
                dispatch(action);
            }
        }).catch(() => {
            console.log("获取home数据失败~");
        })
    }
};
export const showDownload = () => ({
    type: constants.HANDLE_DOWNLOAD
});
export const hiddenDownload = () => ({
    type: constants.HIDDEN_DOWNLOAD
});
export const getNewListAdd = (page) => ({
    type: constants.HANDLE_CLICK_ADD,
    value: fromJS(page + 1)
})
export const getNewListSub = () => ({
    type: constants.HANDLE_CLICK_SUB
})