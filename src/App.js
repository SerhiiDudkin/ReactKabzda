import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settigns from "./Components/Settigns/Settigns";
import {addPost} from "./redux/state";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settigns' render={() => <Settigns/>}/>
            </div>
        </div>
    );
};

export default App;
