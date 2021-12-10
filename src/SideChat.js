import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./SideChat.css";

const SideChat = () => {
    return (
        <div className="sidebar_chats">
          <AccountCircleIcon className="avtar_icon"   />
           <div className="sidebar_chat_info">
            <h4>Room name </h4>
            <p>lasst seen...</p>
           
           </div>
           
            
        </div>
    )
}

export default SideChat;
