import React from 'react'
import style from './Room.css'
export default function Room(props){
    const info=props.room_info;
    return (
        <li className={style.room} onClick={()=>window.open(info.url)}>
           <img className={style.img} src={info.room_src} alt={info.room_name} />
           <div className="">
                <img className={style.avatar} src={info.avatar_small} alt={info.nickname}/>
                <span >{info.nickname}</span>
           </div>
        </li>

    )
}