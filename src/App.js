import React, {Fragment} from 'react';
import Header from "./common/header/index";
import Home from "./pages/home";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from './style';
import { GlobalIcon } from "./static/iconfont/iconfont";

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <GlobalStyle/>
                <GlobalIcon/>
                <Header/>
                <Home/>
            </Provider>
        </Fragment>
    );
}

export default App;
