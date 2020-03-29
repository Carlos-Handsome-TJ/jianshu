import React, {Fragment} from 'react';
import Header from "./common/header";
import { GlobalStyle } from './style';
import { GlobalIcon } from "./static/iconfont/iconfont";

function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <GlobalIcon/>
            <Header/>
        </Fragment>
    );
}

export default App;
