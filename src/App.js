import React from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Route pathName='/profile' component={Profile}/>
        <Route pathName='/dialogs' component={Dialogs}/>
          {/*<Profile />
          <Dialogs />*/}
        </div>
      </div>
        </Router>
  );
}

export default App;
