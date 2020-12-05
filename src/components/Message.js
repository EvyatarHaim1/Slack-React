import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

function Message({ message, timestamp, user, userImg}) {
    return (
        <Div>
            <Avatar className="avatar" src={userImg} alt="userImg" />
            <div className="messageInfo">
                <h4>
                    { user } 
                      <span className="messageTimetamp">
                          {new Date(timestamp?.toDate()).toUTCString()}
                      </span>
                </h4>
                <p>{message}</p>
            </div>
        </Div>
    )
}

export default Message;

const Div = styled.div`
display:flex;
align-items: center;
padding: 10px;

.avatar{
    height: 50px;
    width: 50px;
    object-fit: contain;
    margin-left: 10px !important;

}

.messageTimetamp{
    color: gray;
    font-weight: 300;
    padding-left: 10px;
    font-size: 13px;
}
.messageInfo{
    padding-left: 10px;
}
`
