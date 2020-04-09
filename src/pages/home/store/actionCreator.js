import { fromJS } from "immutable";
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
const getMore = (data) => ({
    type: constants.GET_MORE_LIST,
    moreList: fromJS(data.data.contentList)
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
export const changeScroll = () => ({
    type: constants.CHANGE_SCROLL
})
export const hiddenScroll = () =>({
    type: constants.HIDDEN_SCROLL
});
export const getMoreList = () => {
    return (dispatch) => {
        axios.get('./api/morelist.json').then(res => {
            const data = res.data;
            if (data.success) {
                const action = getMore(data);
                dispatch(action);
            }
        }).catch(() => {
            console.log("获取更多数据失败~");
        })
    }
}