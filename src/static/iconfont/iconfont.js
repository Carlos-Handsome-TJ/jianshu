import {createGlobalStyle} from "styled-components";

export const GlobalIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1585622776244'); /* IE9 */
  src: url('./iconfont.eot?t=1585622776244#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1585622776244') format('woff'),
  url('./iconfont.ttf?t=1585622776244') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1585622776244#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
