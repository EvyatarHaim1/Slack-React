import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useStateValue } from '../store/StateProvider';
import { actionTypes } from '../store/reducer';

function Login() {

   const [state, dispatch] = useStateValue();

   const signIn = () => {
       auth
           .signInWithPopup(provider)
           .then( result => {
               console.log(result);
               dispatch({
                   type: actionTypes.SET_USER,
                   user: result.user,
               })
           })
           .catch(error => {
               alert(error.message)
           })
   }

    return (
        <Div>
            <div className="loginContainer">
                <img src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="slackLogo" />
                <h1> Sign in to JR.Devs</h1>
                <p>https://www.jrdevjobs.com/</p>
                <Button onClick={signIn}> Sign In With Google </Button>
            </div>
        </Div>
    )
}

export default Login;

const Div = styled.div`
height: 100vh;
background-color: #f8f8f8;
display: grid;
place-items: center;

.loginContainer{
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 
    0 1px 2px rgba(0,0,0,0.24);
}

.loginContainer > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
}

.loginContainer > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}
`
