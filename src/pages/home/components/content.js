import React from "react";
import { connect } from "react-redux";
import { Content, ContentWrapper, ContentTitle, ContentImg, ContentDes, ContentIcon } from "../style"

const Contents = (props) => {
    return (
        <Content>
            {props.contentList.map((item) => {
                return (
                    <ContentWrapper
                    key={item.get("id")}
                    >
                        <ContentImg>
                            <img
                                className={'content_img'}
                                src={process.env.PUBLIC_URL + item.get("imgUrl")} alt=""/>
                        </ContentImg>
                        <ContentTitle>
                            <h3>{item.get("title")}</h3>
                        </ContentTitle>
                        <ContentDes>
                            <p>{item.get("content")}</p>
                        </ContentDes>
                        <ContentIcon>
                            <span className="iconfont dom">&#xe6c3;{item.get("dom")}</span>
                            <span className="name">{item.get("author")}</span>
                            <span className="iconfont comment">&#xe601;{item.get("comment")}</span>
                            <span className="iconfont fav">&#xe643;{item.get("fav")}</span>
                            <span className="iconfont apr">&#xe80a;{item.get("appreciate")}</span>
                        </ContentIcon>
                    </ContentWrapper>
                )
            })}

        </Content>
    )
};
const mapState = (state) => ({
    contentList: state.getIn(['home', 'contentList'])
});

export default connect(mapState, null)(Contents);