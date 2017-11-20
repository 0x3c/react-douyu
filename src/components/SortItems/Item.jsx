import React from 'react'

import style from './item.css'

export default function Item(props){
    return(
        <li className={style.itemContainer}>
            <a className={style.itemBox}>
                <img className={style.itemThum} src={props.item.game_src} alt="xx"/>
                <p className={style.itemTitle}>{props.item.game_name}</p>
                <div className={style.itemShadow}>
                
                </div>
            </a>
        </li>
    )
}