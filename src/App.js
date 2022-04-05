import './App.css';
import Header from './components/Header/Header.jsx'
import NavbarContainer from './components/Navbar/NavbarContainer.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile.jsx';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route 
            path="/dialogs" 
            element={ <DialogsContainer />} 
            />
            
            <Route 
            path="/profile" 
            element={ <Profile /> } 
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
