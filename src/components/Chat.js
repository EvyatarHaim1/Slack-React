import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';
import db from '../firebase';

function Chat() {

    const { roomId } = useParams();
    const [ roomDetails, setRoomDetails ] = useState(null);
    const [ roomMessages, setRoomMessages ] = useState([]);

    useEffect(() => {
       if(roomId){
           db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
                 setRoomDetails(snapshot.data())
                 ))
       }

       db.collection('rooms').doc(roomId)
         .collection('messages')
         .orderBy('timestamp', 'asc')
         .onSnapshot( snapshot => setRoomMessages(snapshot.docs.map(doc =>doc.data())
         ))
    }, [roomId]);

    console.log(roomId);
    console.log(roomMessages);
    

    return (
        <Div>
            <div className="chat_header">
                <div className="chatHeader_left">
                    <h4 className="chat_channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chatHeader_right">
                     <p>
                         <InfoOutlinedIcon /> Details
                     </p>
                </div>

            </div>

            <div className="chat_messages">
               {roomMessages.map(message => (
               <Message 
                       message={message.message}
                       timestamp={message.timestamp}
                       user={message.user}
                       userImg={message.userImg}
               />
               ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </Div>
    )
}

export default Chat;

const Div = styled.div`
   flex: 0.7;
   flex-grow: 1;
   overflow-y: scroll;
   padding-bottom: 150px;

   .chat_header{
       display: flex;
       align-items: center;
       justify-content: space-between;
       padding: 20px;
       border-bottom: 1px solid lightgray;
   }

   .chatHeader_right > p {
       display: flex;
       align-items: center;
       font-size: 14px;
   }

   .chatHeader_right > p > .MuiSvgIcon-root {
       margin-right: 5px !important;
       font-size: 16px;
   }

   .chat_channelName {
       display: flex;
       text-transform: lowercase;
   }

   .chat_channelName > .MuiSvgIcon-root {
       margin-left: 10px;
       font-size: 18px;
   }

   .chatHeader_left > h4 {
       align-items: center;
       justify-content: center;
   }
   
`
