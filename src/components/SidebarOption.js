import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function SidebarOption({ Icon, title, id, addChannelOption }) {

    const history = useHistory();

    const addChannel = () => {
      const channelName = prompt('Please enter the channel name: ');
      if(channelName){
          db.collection('rooms').add({
              name: channelName,
          })
      }
    }

    const selectChannel = () => {
        if(id){
          history.push(`/room/${id}`);
        } else {
            history.push(title);
        }
    }


    return (
        <Div onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="SidebarOption_Icon" /> }
            {Icon ? <h3>{title}</h3>:
                <h3 className="SidebarOption_channel">
                    <span className="sidebar_hash"># </span> {title}
                </h3>
            }
        </Div>
    )
}

export default SidebarOption;

const Div = styled.div`
display: flex;
align-items: center;
font-size: 12px;
padding-left: 2px;
cursor: pointer;

h3{
    font-weight: 500;
}
:hover{
    opacity: 0.9;
    background-color: #340e36;
}

.SidebarOption_Icon{
    padding: 10px;
    font-size: 15px !important;
}

.SidebarOption_channel{
    padding: 10px 0;
}

.sidebar_hash{
    padding: 10px;
}
`