import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';

function Sidebar() {

   const [channels, setChannels] = useState([]);

    useEffect(() => {
     db.collection('rooms').onSnapshot((snapshot) => (
       setChannels(snapshot.docs.map((doc) => ({
         id: doc.id,
         name: doc.data().name,
       })
      ))
     ))
   }, []);

    return (
        <Div>
            <div className="sidebar_header">
              <div className="sidebar_info">
                <h2>JR-Devs</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Evyatar Haim
                </h3>
              </div>
              <CreateIcon />
            </div>
              <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
              <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
              <SidebarOption Icon={DraftsIcon} title="Saved items"/>
              <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
              <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
              <SidebarOption Icon={AppsIcon} title="Apps"/>
              <SidebarOption Icon={FileCopyIcon} title="File browser"/>
              <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
              <hr/>
              <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
              <hr/>
              <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption/>
              {channels.map(channel => (
                <SidebarOption title={channel.name} 
                               id={channel.id}  
                />
              ))}
        </Div>
    )
}

export default Sidebar;

const Div = styled.div`
  background-color: var(--slack-color);
  border-top: 1px solid #4927db;
  max-width: 260px;
  color: white;
  flex: 0.3;

  hr{
    margin-top:10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }

  .sidebar_header{
    display: flex;
    border: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;
  }

.sidebar_header > .MuiSvgIcon-root {
      padding: 8px;
      color: #49274b;
      font-size: 18px;
      background-color: white;
      border-radius: 999px;
    }

  .sidebar_info{
    flex: 1;
  }

  .sidebar_info > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  .sidebar_info > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
  }

  .sidebar_info > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`