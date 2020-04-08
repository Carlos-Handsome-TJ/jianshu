import React, { Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux"
import {HomeWrapper, HomeLeft, HomeRight} from "./style";
import  Img  from "./components/img";
import Topics from "./components/topic";
import  Contents  from "./components/content";
import Downloads from "./components/download";
import Boards from "./components/board";
import Recommends from "./components/recommend";
import { actionCreators } from "./store/index";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        axios.get("./api/home.json").then((res) => {
            const data = res.data;
            if (data.status) {
                const action = actionCreators.getHomeData(data);
                this.props.handleData(action);
            }
        }).catch(() => {
            console.log("获取home数据失败~");
        })
    }
    render() {
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <Img />
                        <Topics/>
                        <Contents></Contents>
                    </HomeLeft>
                    <HomeRight>
                        <Boards></Boards>
                        <Downloads></Downloads>
                        <Recommends></Recommends>
                    </HomeRight>
                </HomeWrapper>
            </Fragment>
        );
    }
}
const mapDispatch = (dispatch) => {
  return {
      handleData(action) {
          dispatch(action)
      }
  }
};

export default connect(null, mapDispatch)(Home);