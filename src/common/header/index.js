import React, {Fragment} from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {HeaderWrapper, LogoWrapper, Nav, Addition, NavItem, NavWrapper, NavInput, AdditionItem} from "./style"
import CSSTransition from "react-transition-group/cjs/CSSTransition";

export const Index = (props) => {
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
                            in={props.focused}
                            timeout={500}
                            classNames={'slide'}
                        >
                            <NavInput
                                className={props.focused ? 'input_active' : ''}
                                onFocus={props.handelFocus}
                                onBlur={props.handelBlur}
                            />
                        </CSSTransition>
                        <span
                            className={props.focused ? 'iconfont active' : 'iconfont'}
                        >&#xe60b;</span>
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
};

const mapStateToProps = (state) => {
  return {
      focused: state.getIn(['header', 'focused'])
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
      handelFocus() {
          dispatch(actionCreators.getInputFocused());
      },
      handelBlur() {
          dispatch(actionCreators.getInputBlur());
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);