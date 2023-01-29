import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationRoutes } from './routes';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
