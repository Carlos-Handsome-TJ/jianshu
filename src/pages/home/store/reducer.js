import { constants } from "./index"
import { fromJS } from "immutable";

const defaultState = fromJS({
    show: false,
    scroll: false,
    imgList: [],
    topicList: [],
    contentList: [],
    boardList: [],
    recommendList: [],
    page: '',
    totalPage: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_HOME_DATA:
            return state.merge({
                imgList: action.imgList,
                topicList: action.topicList,
                contentList: action.contentList,
                boardList: action.boardList,
                recommendList: action.recommendList,
                page: action.page,
                totalPage: action.totalPage
            });
        case constants.HANDLE_DOWNLOAD:
            return state.set('show', true);
        case constants.HIDDEN_DOWNLOAD:
            return state.set('show', false);
        case constants.HANDLE_CLICK_ADD:
            return state.set('page', action.value);
        case constants.HANDLE_CLICK_SUB:
            return state.set('page', 1);
        case constants.CHANGE_SCROLL:
            return  state.set('scroll', true);
        case constants.HIDDEN_SCROLL:
            return state.set('scroll', false);
        case constants.GET_MORE_LIST:
            return state.merge({
                contentList: state.get('contentList').concat(action.moreList)
            })
        default:
            return state;
    }
}