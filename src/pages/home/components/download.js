import React from "react";
import { connect } from "react-redux";
import { showDownload, hiddenDownload } from "../store/actionCreator";
import { Download, DownloadInfo, DownloadBlock } from "../style"

class Downloads extends React.Component {
    constructor(props) {
        super(props);
        this.getDownload = this.getDownload.bind(this)
    }
    getDownload() {
        if (this.props.show) {
            return (
                <DownloadBlock>
                    <img
                        className={"hiddenImg"}
                        src={process.env.PUBLIC_URL + '/images/test4.png'} alt=""/>
                    <span className="iconfont block"
                    >&#xe625;</span>
                </DownloadBlock>
                )
        }
    }
    render() {
        return (
            <Download
                onMouseEnter={this.props.handelMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
            >
                {this.getDownload()}
                <img
                    className={"downloadImg"}
                    src={process.env.PUBLIC_URL + '/images/test4.png'} alt=""/>
                <DownloadInfo>
                    <p className="app">下载手机app ></p>
                    <p className="write">随时随地发现和创作内容</p>
                </DownloadInfo>
            </Download>
        )
    };
}

const mapState = (state) => {
    return {
        show: state.getIn(['home', 'show'])
    }
};
const mapDispatch = (dispatch) => {
    return {
        handelMouseEnter() {
            const action = showDownload();
            dispatch(action)
        },
        handleMouseLeave() {
            const action = hiddenDownload();
            dispatch(action);
        }
    }
};

export default connect(mapState, mapDispatch)(Downloads);