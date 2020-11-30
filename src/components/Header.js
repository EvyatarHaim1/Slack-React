import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Div>
            <div className="header_left">
               <Avatar
                   className="header_avatar"
                   alt=""
                   src=""
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
`