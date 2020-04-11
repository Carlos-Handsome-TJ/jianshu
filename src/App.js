import React, {Fragment} from 'react';
import Header from "./common/header/index";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./login/index"
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from './style';
import { GlobalIcon } from "./static/iconfont/iconfont";

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <GlobalStyle/>
                <GlobalIcon/>
                <BrowserRouter>
                    <Route path="/" exact component={Header}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/detail" exact component={Header}/>
                    <Route path="/detail" exact component={Detail}/>
                    <Route path="/login" exact component={Login}/>
                </BrowserRouter>
            </Provider>
        </Fragment>
    );
}

export default App;
