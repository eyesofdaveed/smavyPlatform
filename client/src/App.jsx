import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LoadingCircle } from '@atoms';
import { Protected } from './routes/ProtectedRoutes';
import { Public } from './routes/PublicRoutes';
import { setCookie } from './store/authSlice';

const App = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const cookieExists = document.cookie.split(';').some((item) => item.trim().startsWith('accessToken='));
    
    if(!cookieExists ){
      navigate('/login')
    }
    else{
      dispatch(setCookie())
    }
  
  }, [])

  const isLoading = useSelector(state => state.auth.isLoading);
  const isAuthorized = useSelector(state => state.auth.isAuthorized);


  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <>
      {isAuthorized ? <Protected /> : <Public />}
    </>
  );
};

export default App;
