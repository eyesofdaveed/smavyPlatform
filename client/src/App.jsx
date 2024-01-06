import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LoadingCircle } from '@atoms';
import { Public } from './routes/PublicRoutes';
import { Protected } from './routes/ProtectedRoutes';

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
