import { createGlobalStyle } from "styled-components";

export const GlobalIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1586222737962'); /* IE9 */
    src: url('./iconfont.eot?t=1586222737962#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1586222737962') format('woff'),
    url('./iconfont.ttf?t=1586222737962') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1586222737962#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;


