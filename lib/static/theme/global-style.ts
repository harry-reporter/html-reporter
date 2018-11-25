import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .app {
    font-family: helvetica, arial, sans-serif;
    padding: 2em;
    border: 5px solid pink;

    p {
      background-color: blue;
    }
  }
`;
