import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../GlobalStyle';
import ContentContainer from '../containers/ContentContainer';
import EditorPanel from '../components/EditorPanel';
import BioPanel from '../components/BioPanel';
import Background from '../components/Background/bg_2';
import Header from '../components/Header';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Background />
        <ContentContainer>
          <EditorPanel />
          <BioPanel />
        </ContentContainer>
      </>
    </ThemeProvider>
  </>
);
export default hot(App);
