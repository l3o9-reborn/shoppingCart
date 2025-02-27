import { createGlobalStyle } from "styled-components";

// Define the global font and color variables
const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Arial', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
    
    --color-primary: #2a9d8f;
    --color-secondary: #333;
    --color-background: #f5f5f5;
    --color-text: #1c1c1c;
    --color-border: #ddd;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
  }

  p {
    font-size: 1rem;
    color: var(--color-text);
  }

  a {
    text-decoration: none;
    color: var(--color-primary);
  }

  button {
    background-color: var(--color-primary);
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background-color: var(--color-secondary);
    }
  }
`;

export default GlobalStyle;