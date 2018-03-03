import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Seymour+One');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: #EEE;
    min-height: 100%;
    min-width: 100%;
    height: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
