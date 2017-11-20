import React from 'react'

import style from'./menu.css'

export default function Menu2(props){
    const isHover=props.isHover;
    const items = props.items;
    const itemList=items.map((v)=>{
        return <li key={v.cate_id}><a target="_blank"  href={"/"+v.cate_id}>{v.game_name}</a></li>
    })
    return(
        isHover &&
        <div className={style.subnav}>
            {/* <i></i> */}
            <div className={style.menu}>
                <h3>热门分类</h3>
                <ul>{itemList}</ul>
            </div>
            <a className={style.more} target="_blank" href="/directory">全部 &gt;&gt;</a>
        </div>
    )
}