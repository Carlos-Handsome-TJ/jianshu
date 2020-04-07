import React from "react";
import { connect } from "react-redux"
import {HomeImg} from "../style";

const Img = (props) => {
    return (
        <HomeImg>
            <img
                className={'home_img'}
                src={process.env.PUBLIC_URL + props.imgList.get(1)} alt=""/>
        </HomeImg>
    )
};
const mapState = (state) => ({
    imgList: state.getIn(['home', 'imgList'])
});

export default connect(mapState, null)(Img);