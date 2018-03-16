import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: #EEE;
    min-height: 100vh;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
