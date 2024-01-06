import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { LoadingCircle } from '@atoms';
import { Protected } from './routes/ProtectedRoutes';
import { Public } from './routes/PublicRoutes';

const App = () => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  const isLoading = useSelector(state => state.auth.isLoading);

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <BrowserRouter>{isAuthorized ? <Protected isAuthorized={isAuthorized} /> : <Public />}</BrowserRouter>
  );
};

export default App;
