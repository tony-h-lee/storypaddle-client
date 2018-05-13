import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: #F3F3F3;
    min-height: 100vh;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
  
  .react-autosuggest__container {
    position: relative;
  }
  
  .react-autosuggest__input--focused {
    outline: none;
  }
  
  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .react-autosuggest__suggestions-container {
    display: none;
  }
  
  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    margin-top: 0.5rem;
    width: 280px;
    max-height: 500px;
    overflow-y: auto;
    border: 1px solid #aaa;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }
  
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }
  
  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
  
  .autosuggest__header {
    fonts-size: 0.85rem;
    color: #777;
    padding: 0.7rem 1rem;
  }
`;
