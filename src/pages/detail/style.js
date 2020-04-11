import styled from "styled-components";

export const DetailBody = styled.div`
    width: 100%;
    background: #f9f9f9;
    overflow: hidden;
`;
export const ContentLeft = styled.div`
    width: 45%;
    float: left;
    padding: 30px;
    margin-top: 10px;
    margin-left: 20%;
    background: #fff;
    .detail_wrapper {
        display: flex;
        .detail_author {
                    display: inline-block;

            margin-right: 5px;
            }
        .detail_flow {
            display: inline-block;
            color: red;
            font-size: 12px;
            line-height: 16px;
            padding: 1px 10px;
            border-radius: 10px;
            border: 1px solid red;
            box-sizing: border-box;
            }
        .detail_more {
            margin-top: 5px;
            line-height: 20px;
            .fav {
                color: red;
                font-size: 13px;
                margin-right: 10px;
                }
            .detail_data {
               font-size: 13px;
                }
            }
        }
    .detail_title {
        font-size: 30px;
        font-weight: bold;
        line-height: 40px;
        margin-bottom: 20px;
        }
    .detail_img {
        display: inline-block;
        width: 45px;
        height: 45px;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
        }
    .detail_icon {
        width: 100%;
        height: 100%;
        }
    .detail_content {
        padding-top: 30px;
        line-height: 30px;
`;
export const ContentRight = styled.div`
    width: 15%;
    float: right;
    overflow: hidden;
    margin-top: 10px;
    margin-right: 15%;
    background: #fff;
    .detail_adv {
        width: 100%;
        height: 250px;
        line-height: 250px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        }
    .detail_about {
        width: 100%;
        height: 300px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        line-height: 300px;
        background: skyblue;
        }
`;