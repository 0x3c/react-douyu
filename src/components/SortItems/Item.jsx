import React from 'react'

export default function Item(props){
    console.log(props.item)
    return(
        <li className="sort-item">
            <a className="sort-item-box">
                <img className="sort-item-thum" src={props.item.game_src} alt="xx"/>
                <p className="sort-item-title">{props.item.game_name}</p>
                <div className="sort-item-shadow">
                
                </div>
            </a>
        </li>
    )
}