import React from 'react'
import Room from './Room/Room'

import style from './RoomList.css'


// props： 
// list：直播房间列表,数组

export default  function RoomList(props){
    const list=props.list;
    const roomlist=list.length>0 && list.map(
        (item)=><Room key={item.room_id} room_info={item}/>
    )
    return (
        <div className={style.container}>
            <ul className={style.roombox}>
                {roomlist}
            </ul>
        </div>
    )
}