import { FiberManualRecord, Fireplace } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
    return (
        <Div>
            <div className="sidebar_header">
              <div className="sidebar_info">
                <h2>clever programmer</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Evyatar Haim
                </h3>
              </div>
              <CreateIcon />
            </div>
        </Div>
    )
}

export default Sidebar;

const Div = styled.div``