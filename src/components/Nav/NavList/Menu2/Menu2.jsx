import React from 'react'

import './menu.css'

export default function Menu2(props){
    
    return(
        <div className={props.className}>
            <i></i>
            <div className="menu2-list">
                <h3>热门分类</h3>
                <ul>
                    <li><a target="_blank" class="btn" href="/directory/game/LOL">英雄联盟</a></li>
                    <li><a target="_blank" class="btn" href="/directory/game/LOL">英雄联盟</a></li>
                    <li><a target="_blank" class="btn" href="/directory/game/LOL">英雄联盟</a></li>
                    <li><a target="_blank" class="btn" href="/directory/game/LOL">英雄联盟</a></li>
                </ul>
            </div>
            <a className="menu2-more" target="_blank" href="/directory">全部 &gt;&gt;</a>
        </div>
    )
}