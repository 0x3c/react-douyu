import React from 'react'

import Item from './Item'
import Title from './Title/Title'
import Loading from '../Loading'
import RoomList from '../../components/RoomList/RoomList'
// const SortItem=(item)=>{
//     <li key={item.cate_id} className="sort-item">
//     <a className="sort-item-box">
//         <img className="sort-item-thum" src={item.game_src} alt=""/>
//         <p className="sort-item-title">{item.game_name}}</p>
//         <div className="sort-item-shadow">

//         </div>
//     </a>
//     </li>
// }


//显示二级分类列表或二级频道下的直播房间列表
//通过父组件state.showLive是否为true，展示不同列表

export default function SortItems (props){
        const items=props.items.slice(0);
        const liveList=props.liveList.slice(0);
        return (
            <div>
                <Title sort={props.sort} onClick={props.onClick}/>
                {props.showLive ?
                    <div>
                    {
                        <RoomList list={liveList} />
                    }
                    </div>:
                    <div>
                    { items.length>0 ?
                        items.map((item)=>
                        {
                            return <Item key={item.tag_id||item.cate_id} item={item} handleT2Room={props.handleT2Room} />;
                        }
                        )    
                        :
                        <Loading />}
                    </div>
                }
            
            </div>
        );
}