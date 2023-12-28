import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import { store } from './store'
import './index.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counterSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)