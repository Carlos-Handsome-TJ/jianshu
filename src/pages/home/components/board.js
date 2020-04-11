import React from "react";
import { connect } from "react-redux";
import { Board, BoardItem } from "../style";

const Boards = (props) => {
    return (
        <Board>
            {
                props.boardList.map((item) => {
                    return (
                        <BoardItem key={item.get("id")}>
                            <span className={"boardItem"}>
                                <img className={"boardImg"}
                                     src={process.env.PUBLIC_URL + item.get("imgUrl")} alt=""/>
                            </span>
                        </BoardItem>
                    )
                })
            }
        </Board>
    )
};
const mapState = (state) => {
    return {
        boardList: state.getIn(['home', 'boardList'])
    }
};

export default connect(mapState, null)(Boards);