import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';


export const GlobalStyle = createGlobalStyle`
   body {
   background: rgb(63,94,251);
   background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,208,252,0.4290091036414566) 100%);
   margin: 0;
   padding: 0;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   /* Центрквання блоку */
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
   }

code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
   monospace;
}

ul {
   margin: 0;
   padding: 0;
   list-style: none;
}

body,
h1,
h2,
h3,
h4,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
   margin: 0;
}
`;


