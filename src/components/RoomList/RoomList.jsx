import React from 'react'
import Room from './Room/Room'

import style from './RoomList.css'

export default  function RoomList(props){
    const list=props.list;
    const roomlist=list.length>0 && list.map(
        (item)=><Room key={item.room_id} room_info={item}/>
    )
    return (
        <ul className={style.roombox}>
           {roomlist}
        </ul>

    )
}