import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../store/StateProvider';

function Header() {

    const [{user}] = useStateValue();

    return (
        <Div>
            <div className="header_left">
               <Avatar
                   className="header_avatar"
                   alt={user?.displayName}
                   src={user?.photoURL}
              />
              <AccessTimeIcon />
            </div>
            <div className="header_search">
                <SearchIcon />
                <input placeholder="search"/>
            </div>
            <div className="header_right">
                <HelpOutlineIcon />
            </div>
        </Div>
    )
}

export default Header;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;

.header_left{
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.header_left > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}

.header_search{
    flex: 0.4;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;
    border-radius: 6px;
    input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 35vw;
        color: white;
    } 
}

.header_right{
    flex: 0.3;
    display: flex;
    align-items: flex-end;
}

.header_right .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 40px;
}
`