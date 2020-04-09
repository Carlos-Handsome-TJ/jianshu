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
    width: 32%;
    height: 300px;
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
export const Download = styled.a`
    display: block;
    position: relative;
    vertical-align: middle;
    width: 100%;
    height: 86px;
    margin-bottom: 20px;
    user-select: none;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #fff;
    .downloadImg {
        width: 60px;
        height: 60px;
        float: left;
        margin-right: 15px;
        }
    .app {
        font-size: 15px;
        color: #333;
        margin-bottom: 4px;
        }
    .write {
        font-size: 13px;
        color: #999;
        }
`;
export const DownloadInfo = styled.div`
    float: right;
`;
export const DownloadBlock = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: -220px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 10px;
    background: #fff;
    .hiddenImg {
        width: 100%;
        }
    .block {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        color: #000;
        font-size: 25px;
        }
`;
export const Board = styled.div`
    width: 100%;
    margin-bottom: 10px;
`;
export const BoardItem = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    .boardItem {
        display: block;
        .boardImg {
            width: 100%;
            }
        }
`;
export const Recommend = styled.div`
    width: 100%;
    height: 300px;
`;
export const RecommendHeader = styled.div`
    width: 100%;
    height: 20px;
    line-height: 20px;
    color: #969696;
    display: flex;
    justify-content: space-between;
    .rec-author {
            font-size: 14px;
            }
    .renewal {
            font-size: 14px;
            cursor: pointer;
            }
`;
export const RecommendList = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 15px;
    position: relative;
    .rec_wrapper {
        display: flex;
        width: 100%;
        }
    .img_wrapper {
        display: block;
        border: 1px solid #ddd;
        border-radius: 50%;
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        margin-right: 10px;
        }
    .rec_img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        }
    .rec_author {
        display: inline-block;
        line-height: 30px;
        font-size: 14px;
        color: #333;
        text-decoration: none;
        }
    .rec_des {
        color: red;
        font-size: 12px;
        line-height: 20px
        }
    .add {
        position: absolute;
        top: 2px;
        right: -40px;
        display: block;
        width: 30%;
        font-size: 13px;
        text-decoration: none;
        color: green;
        }
`;
export const BackTopWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background: orange;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    padding: 5px;
    box-sizing: border-box;
    position: fixed;
    top: 550px;
    right: 100px;
    cursor: pointer;
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    background: grey;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 20px;
    line-height: 40px;
`;