import React from 'react';
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {

    const { roomId } = useParams();

    return (
        <Div>
            <div className="chat_header">
                <div className="chatHeader_left">
                    <h4 className="chat_channelName">
                        <strong># general</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chatHeader_right">
                     <p>
                         <InfoOutlinedIcon /> Details
                     </p>
                </div>

            </div>
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
