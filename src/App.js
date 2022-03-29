// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile.jsx';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.navbar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route 
            path="/dialogs" 
            element={ <Dialogs 
            state={props.state.messagePage}
            dispatch={props.dispatch}
            />} 
            />
            
            <Route 
            path="/profile" 
            element={ <Profile 
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} 
            /> } 
            />
            <Route path="/news" element={ <News /> } />
            <Route path="/music" element={ <Music /> } />
            <Route path="/settings" element={ <Settings /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
