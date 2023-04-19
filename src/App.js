import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import MainPage from './pages/MainPage';

const theme = {
  white: '#fff',
  black: '#000',

  gray100: '#f1f1f1',
  gray200: '#eee',
  gray300: '#ccc',
  gray400: '#aaa',
  gray500: '#999',
  gray600: '#777',
  gray700: '#555',
  gray800: '#333',
  gray900: '#111',

  main: '#eaa8b3',
  mainDark: '#dd869c',
  mainLight: '#F7CAC9'
};

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  ${reset}
  
  ::-moz-selection {
    background: #B9A0FE;
    color: #fff;
  }
  ::selection {
    background: #B9A0FE;
    color: #fff;
  }

  /* Global Style */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular', sans-serif;
    font-size: 16px;
    background-color: #eee;
    color: #333;
    word-break: keep-all;
  }

  * {
    box-sizing: inherit;
  }

  a {
    color: ${props => props.theme.gray800};
    text-decoration: none;
  }

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
