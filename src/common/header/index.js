import React, {Fragment} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {
    HeaderWrapper,
    LogoWrapper,
    Nav,
    Addition,
    NavItem,
    NavWrapper,
    NavInput,
    AdditionItem,
    SearchArea,
    SearchHot,
    SearchSwitch,
    SearchItem,
    SearchHeader,
} from "./style"
import CSSTransition from "react-transition-group/cjs/CSSTransition";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.getSearch = this.getSearch.bind(this);
    }

    getSearch() {
        const {focused, mouseIn, page, list, totalPage, handelMouseEnter, handelMouseLeave, changeClick } = this.props;
        const newList = list.toJS();
        const showList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i ++) {
                showList.push(<SearchItem
                    key={i}
                >{newList[i]}</SearchItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchArea
                onMouseEnter={handelMouseEnter}
                onMouseLeave={handelMouseLeave}
                >
                    <span className="iconfont triangle">&#xe61c;</span>
                    <SearchHeader>
                        <SearchHot>热门搜索</SearchHot>
                        <SearchSwitch
                        onClick={() => { changeClick (page, totalPage)}}
                        >
                            <CSSTransition
                            in={true}
                            timeout={200}
                            classNames={'rotate'}
                            >
                                <span className="iconfont switch">&#xe630;</span>
                            </CSSTransition>
                            换一批
                        </SearchSwitch>
                    </SearchHeader>
                    {showList}
                </SearchArea>)
        } else {
            return null;
        }
    }

    render() {
        const {focused, handelFocus, list, handelBlur} = this.props;
        return (
            <Fragment>
                <HeaderWrapper>
                    <LogoWrapper/>
                    <Nav>
                        <NavItem className={'left active'}>
                            <span className={'iconfont'}>&#xe632;</span>
                            首页
                        </NavItem>
                        <NavItem className={'left'}>
                            <span className={'iconfont'}>&#xe6db;</span>
                            下载App
                        </NavItem>
                        <NavWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={500}
                                classNames={'slide'}
                            >
                                <NavInput
                                    className={focused ? 'input_active' : ''}
                                    onFocus={() => handelFocus(list)}
                                    onBlur={handelBlur}
                                />
                            </CSSTransition>
                            <span
                                className={focused ? 'iconfont active' : 'iconfont'}
                            >&#xe60b;</span>
                            {this.getSearch(focused)}
                        </NavWrapper>
                        <NavItem className={'right'}>登录</NavItem>
                        <NavItem className={'right'}>
                            <span className={'iconfont diamond'}>&#xe6c3;</span>
                            beta</NavItem>
                        <NavItem className={'right'}>
                            <span className={'iconfont'}>&#xe636;</span>
                        </NavItem>
                    </Nav>
                    <Addition>
                        <AdditionItem className={'register'}>注册</AdditionItem>
                        <AdditionItem className={'writing'}>
                            <span className={'iconfont'}>&#xe61f;</span>
                            写文章
                        </AdditionItem>
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handelFocus(list) {
            if (list.size === 0 ) {
                dispatch(actionCreators.getHeaderList());
            }
            dispatch(actionCreators.getInputFocused());
        },
        handelBlur() {
            dispatch(actionCreators.getInputBlur());
        },
        handelMouseEnter() {
            dispatch(actionCreators.getMouseEnter());
        },
        handelMouseLeave() {
            dispatch(actionCreators.getMouseLeave());
        },
        changeClick(page, totalPage) {
            page < totalPage ? dispatch(actionCreators.getChangePage(page + 1))
                :  dispatch(actionCreators.getChangePage(1));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);