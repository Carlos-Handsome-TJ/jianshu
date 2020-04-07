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
        position: absolute;
        display: inline-block;  
        text-align: center;
        box-sizing: border-box;
        font-size: 20px;
        right: 10px;
           &.active {
                top: 50%;
                transform: translateY(-45%);
                line-height: 26px;
                height: 26px;
                width: 26px;
                background: #969696;
                border-radius: 26px;
           }
           &.switch {
                right: 65px;
                height: 20px;
                width: 20px;
                line-height: 20px;
                color: #777;
                rotate: 360deg;
                }
           &.triangle {
                height: 26px;
                width: 26px;
                line-height: 26px;
                left: 20px;
                top: -20px;
                color: #fff;
                font-size: 15px;
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
export const NavItem = styled.a.attrs({})`
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
export const SearchArea = styled.div`
    position: absolute;
    top: 70px;
    width: 300px;
    padding: 10px 20px;
    line-height: 30px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
export const SearchHeader = styled.div`
    width: 100%;
    display: flex;
    line-height: 20px;
    justify-content: space-between;
    color: #777;
    user-select: none;
`;
export const SearchHot = styled.span`
    display: block;
    font-size: 13px;
`;
export const SearchSwitch = styled.span`
    display: block;
    font-size: 13px;
    cursor: pointer;
    .rotate-enter {
        rotate: 0deg;
        transition: rotate 0.2s ease-in;
        }
    .rotate-enter-active {
        rotate: 360deg;
        }
`;
export const SearchItem = styled.a`
    display: inline-block;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #777;
    margin: 10px 15px 0 0;
    border: 1px solid #969696;
    border-radius: 3px;
    padding: 1px 10px;
    box-sizing: border-box;
    background: rgba(238, 238, 238, 0.3);
`;