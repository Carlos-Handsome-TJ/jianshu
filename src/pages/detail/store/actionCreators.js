import { constants }  from "./index";
import axios from "axios";
import {fromJS} from "immutable";

const getDetail = (data) => ({
    type: constants.GET_DETAIL_CONTENT,
    detail: fromJS(data.detailList)
});
export const getDetailList = (id) => {
    return (dispatch) => {
        axios.get('./api/detail.json?id=' + id).then(res => {
            const data = res.data;
            if (data.success) {
                const action = getDetail(data);
                dispatch(action)
            }
        }).catch(() => {
            console.log("详情页数据获取失败");
        })
    }
}