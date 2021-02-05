import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import reducer from "./store/reducer";

const store: Store<SelectedPostsState, PostAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
