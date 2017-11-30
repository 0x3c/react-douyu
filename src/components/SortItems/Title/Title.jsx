import React from 'react'

import style from './title.css'

export default function Title(props){
        //根据传递进来的一级频道生成小标签
    const items=props.sort.map((v)=>
        {return(
            <li className={style.item} key={v.cate_id}>
                <a onClick={props.onClick} data={v.short_name}>{v.cate_name}</a>
            </li>)
        }
    )

    return(
        <div className={style.warpper}>
            <div className={style.title}>
                全部分类
            </div>
            <ul className={style.classify}>
                <li className={style.item}>
                    <a href="/das">全部</a>
                </li>
                {items}
            </ul>
            <div className={style.clear}></div>
            <hr className={style.hr}/>

        </div>
    )

}