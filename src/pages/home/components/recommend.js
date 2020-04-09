import React from "react";
import { connect } from "react-redux";
import {Recommend, RecommendHeader, RecommendList,} from "../style"
import { getNewListAdd, getNewListSub } from "../store/actionCreator"

class Recommends extends React.PureComponent {
    constructor(props) {
        super(props);
        this.getRecList = this.getRecList.bind(this);
    }
    getRecList() {
        const { page, recommendList } = this.props;
        const newRecList = recommendList.toJS();
        const showList = [];
        if (newRecList.length) {
            for (let i = (page - 1) * 4; i < page * 4; i++) {
                showList.push(<RecommendList
                    key={newRecList[i].id}
                >
                    <div className="rec_wrapper">
                    <span className="img_wrapper">
                        <img
                            className="rec_img"
                            src={process.env.PUBLIC_URL + newRecList[i].icon} alt=""/>
                    </span>
                        <div className="des_info">
                            <a
                                href={"/"}
                                className="rec_author">{newRecList[i].author}</a>
                            <p className="rec_des">写了{newRecList[i].words}字  {newRecList[i].fav}喜欢</p>
                        </div>
                    </div>
                    <a
                        href={"/"}
                        className="iconfont add">&#xe60e;关注</a>
                </RecommendList>);
            }
        }
        return showList;
    }
    render() {
        const { page, totalPage, handleClick } = this.props;
        return (
            <Recommend>
                <RecommendHeader>
                <span
                    className="rec-author"
                >推荐作者</span>
                    <span
                        onClick={() => {handleClick(page, totalPage)}}
                        className="iconfont renewal">&#xe630;
                        换一批
            </span>
                </RecommendHeader>
                {this.getRecList()}
            </Recommend>
        )
    }
}

const mapState = (state) => ({
    recommendList: state.getIn(['home', 'recommendList']),
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home', 'totalPage'])
});
const mapDispatch = (dispatch) => {
    return {
        handleClick(page, totalPage) {
            if (page < totalPage) {
                const action = getNewListAdd(page);
                dispatch(action);
            } else {
                const action = getNewListSub();
                dispatch(action);
            }
        }
    }
};

export default connect(mapState, mapDispatch)(Recommends)