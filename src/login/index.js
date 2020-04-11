import React from "react";
import {connect} from "react-redux";
import {Redirect, NavLink} from "react-router-dom";
import { getAccountValue, getPasswordValue, getLogin } from "./store/actionCreators";
import {LoginBody, LoginLogo, LoginArea} from "./style";

class Login extends React.PureComponent {
    render() {
        if (this.props.login) {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <LoginBody>
                    <NavLink to={"/"}>
                        <LoginLogo/>
                    </NavLink>
                    <LoginArea>
                        <div className="login_choose">
                        <span
                            className="click"
                        >登录</span>·
                            <span
                                className="login_register">注册</span>
                        </div>
                        <div className="input_wrapper">
                            <span className="iconfont account">&#xe612;</span>
                            <span className="iconfont pwd">&#xe610;</span>
                            <input
                                className="input"
                                type="text" placeholder={"手机号或邮箱"}
                                onChange={this.props.handleAccount}
                                value={this.props.account}
                            />
                            <input
                                className="input password"
                                type="password" placeholder={"密码"}
                                onChange={this.props.handlePassword}
                                value={this.props.password}
                            />
                        </div>
                        <div className="login_box">
                            <div>
                                <input type="checkbox" value={""}/><span>记住我</span>
                            </div>
                            <span>登录遇到问题？</span>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    this.props.handleClick(this.props.account, this.props.password)
                                }}
                                className="login_button">登录
                            </button>
                        </div>
                        <div>
                            <p className="social_login">社交账号登录</p>
                            <div className="login_more">
                                <span className="iconfont weibo">&#xe666;</span>
                                <span className="iconfont wechat">&#xe637;</span>
                                <span className="iconfont qq">&#xe600;</span>
                            </div>
                        </div>
                    </LoginArea>
                </LoginBody>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        login: state.getIn(['login', 'login']),
        account: state.getIn(['login', 'value']),
        password: state.getIn(['login', 'password'])
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleClick(accountEle, passwordEle) {
            dispatch(getLogin(accountEle, passwordEle))
        },
        handleAccount(e) {
            dispatch(getAccountValue(e.target.value))
        },
        handlePassword(e) {
            dispatch(getPasswordValue(e.target.value))
        }
    }
}

export default connect(mapState, mapDispatch)(Login);