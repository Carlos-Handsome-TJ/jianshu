import React from "react";
import { connect } from "react-redux";
import { LoadMore } from "../style"
import { getMoreList } from "../store/actionCreator";

const LoadMoreList = (props) => {
    return(
        <LoadMore
            onClick={props.handleClick}
        >点击加载更多</LoadMore>
    )
}
const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            const action = getMoreList();
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatch)(LoadMoreList);