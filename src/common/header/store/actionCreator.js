import axios from "axios";
import {fromJS} from "immutable";
import * as constants from './constants';

const getSearchList = (value) => ({
    type: constants.GET_LIST,
    value: fromJS(value),
    totalPage: Math.ceil(value.length / 10)
});
export const getInputFocused = () => ({
    type: constants.INPUT_FOCUSED
});
export const getInputBlur = () => ({
    type: constants.INPUT_BLUR
});
export const getMouseEnter = () => ({
  type: constants.HANDEL_MOUSE_ENTER,
});
export const getMouseLeave = () => ({
    type: constants.HANDEL_MOUSE_LEAVE,
});
export const getChangePage = (value) => ({
    type: constants.CHANGE_PAGE,
    value
});
export const getHeaderList = () => {
    return (dispatch) => {
        axios.get("./api/headerList.json").then((res) => {
            if (res.data.status) {
                const data = res.data.list;
                dispatch(getSearchList(data));
            }
        }).catch(() => {
            console.log("数据请求失败");
        })
    }
};