import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase';
import { useStateValue } from '../store/StateProvider';
import firebase from 'firebase';

function ChatInput( {channelName, channelId }) {

    const [ input, setInput ] = useState();
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        
        if (channelId){
            console.log(channelId)
          db.collection('rooms').doc(channelId).collection('messages').add({
              message: input,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              user: user.displayName,
              userImg: user.photoURL,
          })
        }
    }
    return (
        <Div>
            <form>
                <input 
                      placeholder={`Message #${channelName?.toLowerCase()}`}
                      onChange={(e) => setInput(e.target.value)}
                      value={input}
                />
                <button type="submit" onClick={sendMessage}>
                      SEND
                </button>
            </form>
        </Div>
    )
}

export default ChatInput;

const Div = styled.div`
   border-radius: 20px;

   form {
       position: relative;
       display: flex;
       justify-content: center;
   }

   form > input {
       position: fixed;
       bottom: 30px;
       width: 60%;
       border: 1px solid gray;
       border-radius: 3px;
       padding: 20px;
   }

   form > button {
       display: none !important;
   }
`
