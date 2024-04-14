import React,{useState,useEffect} from 'react'
import groupImg from "../../ressources/img/pdp.jpg"
import Message from './Data/Message'
import {dataList} from './Data/dataConversation'




export default function Body() {
    const [inputVal,setInputVal]= useState("");
    const [messages,setMessages]= useState(dataList);
    function scrollToChat() {
        var scroll = document.getElementById('chat');
        scroll.scrollTop = scroll.scrollHeight;
    }
    useEffect(() => {
        scrollToChat();
    }, [messages])

  return (
    <div className='right'>
        <div className='conv_header'>
            <div className='conv_left'>
                <img src={groupImg} className="conv_icon" />
                <div className='"conv_info'>
                    <div className='conv_title'>Yonko 🖥️</div>
                     <div className='conv_members'>Saleh,Sherif, You</div>
                </div>
            </div>
            <div className='conv_right'>
                <i className='fa fa-search' aria-hidden='true'></i>
                <i className='fa-solid fa-ellipsis-vertical'></i>
            </div>
        </div>
        <div id='chat' className='chat'>
            {
                messages.map((dataMessage,i)=> <Message key={i} isSent={dataMessage.isSent} message={dataMessage.message}/>)
            }
        </div>
        <div className="bottom_section">
                <div className="bottom_section_left">
                    <i className="fa-regular fa-face-laugh"></i>
                    <i className="fa fa-paperclip" aria-hidden="true"></i>
                </div>
                <input
                        className="message_bar"
                        placeholder="Type a message"
                        onChange = {(e)=>setInputVal(e.target.value)}
                        value={inputVal}
                        onKeyDown={
                            (e) => {
                                if (e.key === "Enter" && inputVal.trim() != "") {
                                    setMessages((prevMessages)=>[...prevMessages, {isSent: true, message: inputVal}])
                                    setInputVal("");
                                }
                            }
                        }
                />
                <div className="bottom_section_right">
                    <i className="fa-solid fa-microphone"></i>
                </div>
        </div>

    </div>
  )
}
