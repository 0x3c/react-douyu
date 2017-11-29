import React from 'react'
import {getT1Live} from '../../utils/API.js'
import style from './directory.css'
import  'whatwg-fetch'

import Nav from '../../components/Nav'
import SortItems from '../../components/SortItems'
import SideMenu from '../../components/SideMenu/SideMenu'

export default class Directory extends React.Component {
    constructor(props) {
        super(props);

        //live: 所有直播房间列表
        //dir: 所有分类列表
        //columns: 一级分类列表
        this.state={
            live: {},
            dir: [],
            columns:[]
        };
        this.getAllLive=this.getAllLive.bind(this);
        this.getAllDir=this.getAllDir.bind(this);
        this.sortDir=this.sortDir.bind(this);
        this.getT1=this.getT1.bind(this);
    }
    //获取所有直播房间
    getAllLive(){
        fetch('/api/RoomApi/live')
        .then(resp=>resp.json())
        .then(data=>this.setState({live:data.data}))
    }
    //获取所有分类
    getAllDir(){
        fetch('/api/RoomApi/game')
        .then(resp=>resp.json())
        .then(data=>this.sortDir(data.data))
    }
    //获取一级频道数据
    getT1(){
        const url=getT1Live();
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>this.setState({columns:data.data}))
    }
    sortDir(data){
        const dir=data;
        dir.sort(function(x,y){
        return x.cate_id-y.cate_id
        });
        this.setState({dir:dir})
    }
    componentWillMount(){
        this.getAllLive();
        this.getAllDir();
        this.getT1();
    }

    render() {
        const sort=this.state.columns;
        const dir_list=this.state.dir.slice(0,9); 
        const dir_lists=this.state.dir.slice(0); 
        return [
            <div className={style.header} key="dir-header">
                <Nav items={dir_list}/>
            </div>,
            <SideMenu key="dir-side-menu" sort={sort} />,
            <div className={style.contianer} key="dir-items" >
                <SortItems sort={sort} items={dir_lists}/>    
            </div>
           
    ]
    }
}