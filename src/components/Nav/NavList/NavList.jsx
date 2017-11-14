import React from 'react'

import './navlist.css'

import Drop from './Drop/Drop'

export default class NavList extends React.Component{
    constructor(props){
        super(props);
    }
    onHover(){
        //弹出二级菜单
        //改变下拉组件为hover状态
    }
    onLeave(){
        //隐藏二级菜单
        //改变下拉组件为正常状态
    }
    render(){
        return (
            <ul className="navlist-ul">
                <li> <a href="#" onMouseEnter={()=>console.log('hover!!')}> 首页 </a> </li>
                <li> <a href="#"> 直播 </a> </li>
                <li> <a href="#"> 分类 </a> <Drop /></li>
                <li> <a href="#"> 游戏 </a> </li>
            </ul>
        )    
    }
}