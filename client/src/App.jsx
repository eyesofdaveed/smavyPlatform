import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Public } from './routes/PublicRoutes';
import { Protected } from './routes/ProtectedRoutes';

const App = () => {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);

  return (
    <BrowserRouter>{isAuthorized ? <Protected /> : <Public />}</BrowserRouter>
  );
};

export default App;
