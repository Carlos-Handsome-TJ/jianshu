import styled from "styled-components";
import Logo from "../../static/logo.png";


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    padding: 0 40px 0 40px;
    width: 100%;
    line-height: 56px;
    border-bottom: 1px solid #eee;
`;
export const LogoWrapper = styled.a.attrs({
    href: '/'
})`
    display: block;
    height: 100%;
    width: 17%;
    background: url(${Logo}) no-repeat;
    background-size: contain;
`;
export const NavWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter {
        width: 160px;
        transition: all 0.5s ease-in;
        }
    .slide-enter-active {
        width: 240px;
        }
    .slide-exit {
        transition: all 0.5s ease-out;
    }
    .slide-exit-active {
        width: 160px;
    }
    .iconfont {
        display: inline-block;  
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-45%);
        height: 26px;
        width: 26px;
        font-size: 12px;
        line-height: 26px;
        text-align: center;
        border-radius: 26px;
        box-sizing: border-box;
        font-size: 20px;
           &.active {
                background: #969696;
           }
    }
`;
export const Nav = styled.div`
    height: 100%;
    width: 60%;
`;
export const Addition = styled.div`
    height: 100%;
    width: 23%;
    line-height: 56px;
`;
export const NavItem = styled.a.attrs({
})`
    display: block;
    height: 26px;
    line-height: 26px;
    width: auto;
    padding: 15px;
    font-size: 17px;
    vertical-align: middle;
    &.active {
        color: #ea6f5a;
        }
    &.left {
        float: left;
        margin-right: 20px;
        }
    &.right {
        float: right;
        margin-left: 20px;
        }
    .iconfont {
        font-size: 20px;
        vertical-align: middle;
        margin-right: 5px;
        }
    .diamond {
        color: #ea6f5a;
        }
    
`;
export const NavInput = styled.input.attrs({
    placeholder: '搜索',
    onfocus: true
})`
    height: 38px;
    width: 160px;
    line-height: 38px;
    padding: 0 40px 0 20px;
    outline: none;
    border: 1px solid #eee;
    border: 1px solid #eee;
    border-radius: 40px;
    font-size: 14px;
    background: #eee;
    &.input_active {
        width: 240px;
        }
`;
export const AdditionItem = styled.a`
    display: inline-block;
    height: 38px;
    line-height: 38px;
    box-sizing: border-box;
    text-align: center;
    margin-left: 20px;
    &.register{
        width: 80px;
        border: 1px solid #ea6f5a;
        border-radius: 20px;
    }
    &.writing {
        background: #ea6f5a;
        width: 100px;
        border: 1px solid #ea6f5a;
        border-radius: 20px;
        }
`;
