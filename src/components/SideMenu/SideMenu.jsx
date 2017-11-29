import React from 'react'

import style from './SideMenu.css'


export default class SideMenu extends React.Component{
    constructor(props){
        super(props)
    }
    
    //挂载后获取父频道分类信息
    //已转移到父组件
    componentDidMount(){
    }
    render(){
        const data=this.props.sort;
        const li=data.map((v)=>
            <a href="/xx" key={v.cate_id} className={style.item}>
                {v.cate_name}
            </a>
        )
        return(
            <div className={style.container}>
                <div className={style.wrapper}>
                    {/* 填装一级分类 */}
                    {li}
                </div>
            </div>
        )
    }
}