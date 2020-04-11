import React from "react";
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./index.js'),
    loading() {
        return <div>这里是可以div内容的，可以导入一个组件，当网速较慢时，显示该组件内容</div>
    }
});

export default () => <LoadableComponent/>