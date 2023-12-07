import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Public } from './routes/Public';
import { Protected } from './routes/Protected';

const App = () => {
  const [isAuthorized] = useState(false);

  return (
    <BrowserRouter>
      {isAuthorized ? <Protected /> : <Public />}
    </BrowserRouter>
  );
};

export default App;
