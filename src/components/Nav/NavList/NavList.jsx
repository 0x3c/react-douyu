import React from 'react'

import './navlist.css'

import Drop from './Drop/Drop'
import Menu2 from './Menu2/Menu2'

export default class NavList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHover:false
        };
        this.onHover=this.onHover.bind(this);
        this.onLeave=this.onLeave.bind(this);
    }
    onHover(){
        //弹出二级菜单
        console.log('showing!')
        //改变下拉组件为hover状态
    }
    onLeave(){
        //隐藏二级菜单
        console.log('dispeared!')
        //改变下拉组件为正常状态
    }
    render(){
        return (
            <ul className="navlist-ul">
                <li> <a href="#"> 首页 </a> </li>
                <li> <a href="#"> 直播 </a> </li>
                <li> <a href="#" onMouseEnter={this.onHover}
                    onMouseLeave={this.onLeave}
                > 分类 </a> <Drop /><Menu2 className="navlist-menu2"/></li>
                <li> <a href="#"> 游戏 </a> </li>
            </ul>
        )    
    }
}