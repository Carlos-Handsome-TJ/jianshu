import React from "react";
import { Topic, TopicItem} from "../style";
import { connect } from "react-redux";
const Topics = (props) => {
    return(
        <Topic>
            {props.topicList.map((item, index) => {
                return <TopicItem
                    key={item.get('id')}
                >
                    <img
                        className={'topic_img'}
                        src={process.env.PUBLIC_URL + item.get('imgUrl')} alt=""/>
                    {item.get('content')}
                </TopicItem>
            })}
            <TopicItem>更多热点 >>></TopicItem>
        </Topic>
    )
};
const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});
export default connect(mapState, null)(Topics);

