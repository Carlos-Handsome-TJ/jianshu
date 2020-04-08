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
        this.props.handleData();
    }
    render() {
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <Img />
                        <Topics/>
                        <Contents/>
                    </HomeLeft>
                    <HomeRight>
                        <Boards/>
                        <Downloads/>
                        <Recommends/>
                    </HomeRight>
                </HomeWrapper>
            </Fragment>
        );
    }
}
const mapDispatch = (dispatch) => {
  return {
      handleData() {
          const action = actionCreators.getHomeData();
          dispatch(action);
      }
  }
};

export default connect(null, mapDispatch)(Home);