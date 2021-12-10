import React from 'react';
import "./SideBar.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SideChat from "./SideChat";


const SideBar = () => {
    return (
        <div className="sideBar">
          <div className="sidebar_top_header">
          <Button>
          <AccountCircleIcon/>
          </Button>
           
            
             <div className="right_header">
              <IconButton>
                <DonutLargeIcon/>  
              </IconButton>
              <IconButton>
               <ChatIcon/>  
              </IconButton>
              <IconButton>
               <MoreVertIcon/>
              </IconButton>
             </div>

          </div>
          <div className="input_box">
             <div className="input_container">
             <SearchIcon/>
             <input type="text" placeholder=" serach or start new chat"/>
               
             </div>

          </div>
          <div className="chat_box">
            <SideChat/>
            <SideChat/>
            <SideChat/>
            <SideChat/>

          </div>
            
        </div>
    )
}

export default SideBar;
