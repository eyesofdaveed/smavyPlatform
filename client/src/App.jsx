import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Public } from './routes/PublicRoutes';
import { Protected } from './routes/ProtectedRoutes';

const App = () => {
  const [isAuthorized] = useState(false);

  return (
    <BrowserRouter>
      {isAuthorized ? <Protected /> : <Public />}
    </BrowserRouter>
  );   
};

export default App;
