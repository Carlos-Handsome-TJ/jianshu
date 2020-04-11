import styled from "styled-components";
import Logo from "../../src/static/logo.png";

export const LoginBody = styled.div`
    width: 100%;
    height: 800px;
    overflow: hidden;
    background: #f1f1f1;
`;
export const LoginLogo = styled.div`
    width: 200px;
    height: 120px;
    background: url(${Logo}) no-repeat;
    background-size: contain;
`;
export const LoginArea = styled.div`
    width: 400px;
    height: 490px;
    border-radius: 5px;
    background: #fff;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    margin: 0 auto;
    .login_choose {
        margin: 0 auto;
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
        width: 40%;
        height: 40px;
        padding-top: 30px;
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
        .click {
            border-bottom: 3px solid #ea6f5a;
            color: #ea6f5a;
            }
        }
    .input_wrapper {
        position: relative;
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        overflow: hidden;
        .account {
            position: absolute;
            top: 18px;
            left: 10px;
            color: #aaa;
            font-size: 16px;
            }
        .pwd {
            position: absolute;
            top: 65px;
            left: 10px;
            color: #aaa;
            font-size: 20px;
            }
        .input {
            width: 100%;
            box-sizing: border-box;
            outline: none;
            border: none;
            line-height: 40px;
            font-size: 14px;
            background: hsla(0,0%,71%,.1);
            padding: 5px 5px 5px 40px;
            }
        .password {
            border-top: 1px solid #c8c8c8;
            }
        }
    .login_box {
        width: 80%;
        color: #969696;
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        }
    .login_button {
        display: block;
        width: 80%;
        margin: 0 auto;
        line-height: 40px;
        font-size: 20px;
        background: #187cb7;
        outline: none;
        border: none;
        border-radius: 20px;
        color: #fff;
        cursor: pointer;
        }
    .social_login {
        position: relative;
        width: 100%;
        margin-top: 50px;
        margin-bottom: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #969696;
        &::before {
            content: "";
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 60px;
            top: 10px;
            left: 90px;
            }
        &::after {
            content: "";
            border-top: 1px solid #b5b5b5;
            display: block;
            position: absolute;
            width: 60px;
            top: 10px;
            right: 90px;
            }
        }
    .weibo {
        color: red;
        font-size: 30px;
        }
    .wechat {
        color: green;
        font-size: 30px;
        }
    .qq {
        color: blue;
        font-size: 27px;
        }
    .login_more {
        width: 50%;
        margin: 0 auto;
        line-height: 30px;
        display: flex;
        justify-content: space-around;
        }
`;