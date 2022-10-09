import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {
 /* 
  1.  const d = props.dialogs;
      const m = props.masseges;
      или
  2. const {dialogs, masseges}=props;  - деструктиризация 
Если использовать 1 или 2, то всесто {dialogs, masseges} пишу props в App*/
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
            <Route path="/profile/*" element={<Profile 
            state={props.state.profilePage} 
            addPost={props.addPost} 
            updataNewPostText={props.updataNewPostText} />} />
            <Route path="/dialogs/*" element={<Dialogs 
            state={props.state.dialogsPage} 
            addMessage={props.addMessage}
            newMassegeText={props.state.dialogsPage.newMassegeText}
            updataNewMessageText={props.updataNewMessageText} />} />
            {/*<Route path="/dialogs/*" element={<Dialogs {...props} />} /> - если бы пропсы приходили только в Dialogs*/}
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/setting/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
