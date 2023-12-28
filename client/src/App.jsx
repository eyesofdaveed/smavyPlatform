import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { Public } from './routes/PublicRoutes';
import { Protected } from './routes/ProtectedRoutes';
import { decrement, increment } from './store/counterSlice'

const App = () => {
  const [isAuthorized] = useState(false);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
    <>
      <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
        >
            Increment
        </button>
        <span>{count}</span>
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
        >
            Decrement
        </button>
    </>
      {isAuthorized ? <Protected /> : <Public />}
    </BrowserRouter>
  );   
};

export default App;
