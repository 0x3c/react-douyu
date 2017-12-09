import React from 'react'
import FontAwesome from 'react-fontawesome'


import style from './Room.css'
export default function Room(props){
    const info=props.room_info;
    return (
        <li className={style.room} style={{width:props.width,height:props.height}}>
            <a href={`/live/${info.room_id}`} target="_blank">
                <img className={style.img} src={info.room_src} alt={info.room_name} />
                <div className={style.msg}>
                        <div className={style.title}>
                            <h3 title={info.room_name}>{info.room_name}</h3>
                            <span>{info.game_name}</span>
                        </div>
                        <p >
                            <span className={style.name}>
                                <FontAwesome  name='user' />
                                &emsp;    
                                {info.nickname}
                            </span>
                            <span className={style.online}>
                            <FontAwesome name='eye'/>
                                &ensp;    
                                {info.online}
                            </span>
                        </p>
                </div>
           </a>
        </li>
    )
}