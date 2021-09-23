import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settigns from "./Components/Settigns/Settigns";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settigns' render={() => <Settigns/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

export default compose(
    withRouter,
    connect (null, {getAuthUserData})) (App);
