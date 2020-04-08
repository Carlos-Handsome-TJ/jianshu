import { createGlobalStyle } from "styled-components";

export const GlobalIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1586264768943'); /* IE9 */
    src: url('iconfont.eot?t=1586264768943#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1586264768943') format('woff'),
    url('iconfont.ttf?t=1586264768943') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1586264768943#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

