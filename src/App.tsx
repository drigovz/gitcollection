import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationRoutes } from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
};

export default App;
