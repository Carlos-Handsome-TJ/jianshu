import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 30px 10px 0 12px;
    box-sizing: border-box;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float: left;
    width: 65%;
`;
export const HomeRight = styled.div`
    float: right;
    width: 35%;
    height: 300px;
    background: blue;
`;
export const HomeImg = styled.div`
    overflow: hidden;
    width: 100%;
    background: yellow;
    margin-bottom: 20px;
    .home_img {
        width: 85%;
        box-sizing: border-box;
        border-radius: 15px;
        }
`;
export const Topic = styled.div`
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
`;
export const TopicItem = styled.div`
    height: 20px;
    float: left;
    padding-right: 5px;
    margin-right: 30px;
    margin-bottom: 10px;
    line-height: 20px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 14px;
    .topic_img {
        float: left;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        }
`;
export const Content = styled.div`
    overflow: hidden;
    width: 100%;
`;
export const ContentWrapper = styled.div`
    float: left;
       padding: 15px 0 15px 0;
    border-bottom: 1px solid #ccc;
`;
export const ContentTitle = styled.div`
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
`;
export const ContentImg = styled.div`
    width: 25%;
    padding: 20px 0 20px 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    float: right;
    .content_img {
        width: 100%;
        }
`;
export const ContentDes = styled.div`
    font-size: 13px;
    color: #999;
    line-height: 24px;
`;
export const ContentIcon = styled.div`
    width: 75%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #b4b4b4;
    .dom {
        color: red;
        font-size: 12px;
        margin-right: 15px;
        text-decoration: none;
        }
    .name {
        margin-right: 15px;
        }
    .comment {
        margin-right: 15px;
        font-size: 12px;
        }
    .fav {
        margin-right: 15px;
        font-size: 12px;
        }
    .apr {
        margin-right: 15px;
        font-size: 12px;
        }
`;
export const Download = styled.div`
    width: 100%;
    height: 50px;
    background: red;
`;
export const Board = styled.div`
    width: 100%;
    height: 300px;
    background: sky;
`;
export const Recommend = styled.div`
    width: 100%;
    height: 300px;
    background: yellow;
`;