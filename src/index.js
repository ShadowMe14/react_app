import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, addMessage, updataNewPostText, updataNewMessageText} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireFree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
       <App state={state} 
       addPost={addPost} 
       updataNewPostText={updataNewPostText}
       addMessage={addMessage}
       updataNewMessageText={updataNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}
rerenderEntireFree(state);

subscribe(rerenderEntireFree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
