import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getDetailList} from "./store/actionCreators";
import {ContentLeft, ContentRight, DetailBody} from "./style"

class Detail extends React.PureComponent {
    componentDidMount() {
        this.props.handleDetail(this.getId());
    }
    //获取路由参数：
    getId() {
        const idPara = this.props.location.search.split("=");
        return idPara[1];
    }
    render() {
        const { title, icon, author, fav, time, words, read, content } = this.props.detailList.toJS();
        return (
            <div>
                <DetailBody>

                    <ContentLeft>
                        <div>
                            <h1 className="detail_title">
                                {title}
                            </h1>
                        </div>
                        <div className="detail_wrapper">
                                 <span className="detail_img">
                                <img
                                    className="detail_icon"
                                    src={process.env.PUBLIC_URL + icon} alt=""/>
                            </span>
                            <div>
                                <span className="detail_author">{fav}</span>
                                <span className="detail_flow">关注</span>
                                <div className="detail_more">
                                    <span className="iconfont fav">&#xe6c3; { author }</span>
                                    <span className="detail_data">
                                        { time } 字数 { words } 阅读{read}
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="detail_content">
                                { content }
                            </p>
                        </div>
                    </ContentLeft>
                    <ContentRight>
                        <div
                            className="detail_adv">这里是广告
                        </div>
                        <div className="detail_about">这里我懒得写</div>
                    </ContentRight>
                </DetailBody>
            </div>
        )
    }
}

const mapState = (state) => ({
   detailList: state.getIn(['detail', 'detailList'])
});
const mapDispatch = (dispatch) => ({
    handleDetail(id) {
        const action = getDetailList(id);
        dispatch(action);
    }
});
export default connect(mapState, mapDispatch)(withRouter(Detail));