import React from 'react';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImg}) {
    return (
        <Div>
            <img src={userImg} alt="userImg" />
            <div className="messageInfo">
                <h4>
                    { user } timestamp...
                </h4>
                <p>{message}</p>
            </div>
        </Div>
    )
}

export default Message;

const Div = styled.div``
