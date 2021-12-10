import React from 'react';
import "./ChatBody.css";
import { IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

const ChatBody = () => {
    return (
        <div className="caht_body">
          <div className="top_bar_header">
          
          <div className="left_side_header">
          <AccountCircleIcon/>
          <h4>subha</h4><br/>
          <p className="para">2.38pm last senn.......................</p>
          </div>
         
          <div className="right_side_icon">
          <IconButton>
                <DonutLargeIcon/>  
              </IconButton>
              <IconButton>
               <AttachFileIcon/>  
              </IconButton>
              <IconButton>
               <MoreVertIcon/>
              </IconButton>

          </div>

         </div>
         <div className="caht_main_body">
         <p className="chat_message  reciver_chat">
         <span className="chat_name">subha</span>
         
         Hi guys
         <span className="chat_time_stamp">3.25am</span> 
         </p>
        
         </div>
         <div className="caht_footer">
         <MoodIcon/>
         <SearchIcon/>
          <form>
              <input type="text"  placeholder="Type a message" />
              {/* <SendIcon/> */}
             <button type="submit" className='submitbtn'></button>
          </form>
          <MicIcon/>
         




         </div>
         
        
           
            

       
            
        </div>
    )
}

export default ChatBody;
