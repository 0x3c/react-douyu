import React from 'react'
import './Room.css'
export default function Room(props){
    const info=props.room_info;
    return (
        <li className="room-float" onClick={()=>window.open(info.url)}>
           <img className="room-room_src" src={info.room_src} alt={info.room_name} />
           <div className="room-msgbox">
                <img className="room-avatar" src={info.avatar_small} alt={info.nickname}/>
                <span >{info.nickname}</span>
           </div>
        </li>

    )
}