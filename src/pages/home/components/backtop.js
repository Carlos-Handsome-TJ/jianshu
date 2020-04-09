import React from "react";
import { connect } from "react-redux";
import { BackTopWrapper } from "../style";
import { changeScroll, hiddenScroll } from "../store/actionCreator"

class BackTop extends React.Component {
    componentDidMount() {
        this.bindEvent();
    }
    bindEvent() {
        window.addEventListener('scroll', () => {
                this.props.changeScroll();
        })
    }
    showBtn() {
        if (this.props.scroll) {
            return(
                <BackTopWrapper
                    className="scroll_top"
                    onClick={this.props.handleClick}>返回顶部
                </BackTopWrapper>
            )
        }
    }
    render() {
        return (
            <div>
                {this.showBtn()}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        scroll: state.getIn(['home', 'scroll'])
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            let timer = null;
            timer = setInterval(() => {
                let begin = document.documentElement.scrollTop;
                let step = -begin * 0.25;
                begin += step;
                if (Math.abs(Math.floor(step)) <= 1) {
                    clearInterval(timer);
                    window.scrollTo(0, 0);
                    return;
                }
                window.scrollTo(0, begin);
            }, 25)
        },
        changeScroll() {
            if (document.documentElement.scrollTop >= 300) {
                const action = changeScroll();
                dispatch(action);
            } else {
                const action = hiddenScroll();
                dispatch(action);
            }
        }
    }
}
export default connect(mapState, mapDispatch)(BackTop);