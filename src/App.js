import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route, BrowserRouter} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settigns from "./Components/Settigns/Settigns";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}/>
                <Route path='/profile'
                       render={() => <Profile />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settigns' render={() => <Settigns/>}/>
            </div>
        </div>
    );
};

export default App;
