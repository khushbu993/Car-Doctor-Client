import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import TopNav from '../Shared/TopNav/TopNav';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName, email
                }
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
                console.log(signedInUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <div className="login-container">
            <TopNav></TopNav>
            <div className="container">
                <div className="row">
                    <div className="login-btn col-md-12">
                    <button class="pulse" onClick={handleGoogleSignIn}>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;