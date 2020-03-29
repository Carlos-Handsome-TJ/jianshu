import React, {Fragment} from "react";
import {HeaderWrapper, LogoWrapper, Nav, Addition, NavItem, NavWrapper, NavInput, AdditionItem} from "./style"
import CSSTransition from "react-transition-group/cjs/CSSTransition";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };
    }

    handelFocus() {
        this.setState({
            focused: true
        })
    }

    handelBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
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
                                in={this.state.focused}
                                timeout={500}
                                classNames={'slide'}
                            >
                                <NavInput
                                    className={this.state.focused ? 'input_active' : ''}
                                    onFocus={this.handelFocus.bind(this)}
                                    onBlur={this.handelBlur.bind(this)}
                                />
                            </CSSTransition>
                            <span
                                className={this.state.focused ? 'iconfont active' : 'iconfont'}
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
    }
}

export default Header;