import React from 'react'
import {getT1Live,getT2Live,getT2Room} from '../../utils/API.js'
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
            showLive:false,
            live: [],
            dir: [],
            columns:[]
        };
        this.getAllLive=this.getAllLive.bind(this);
        this.getAllDir=this.getAllDir.bind(this);
        this.sortDir=this.sortDir.bind(this);
        this.getT1=this.getT1.bind(this);
        this.getT2=this.getT2.bind(this);
        this.getT2Room=this.getT2Room.bind(this);
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
    //将数据数组按cate_id从小到大排序
    sortDir(data){
        const dir=data;
        dir.sort(function(x,y){
        return x.cate_id-y.cate_id
        });
        this.setState({dir:dir})
    }

    //传递给子组件的函数
    //根据父频道获取其子频道信息,该函数传递给SideMenu和Title组件
    getT2(e){
        this.setState({dir:[]})
        //取得short_name
        const short_name=e.target.getAttribute("data")
        const url=getT2Live(short_name);
        fetch(url)
            .then(resp=>resp.json())
            .then(data=>this.setState({dir:data.data,showLive:false}))
    }
    //获取二级频道下所有直播房间
    getT2Room(e){
        //获取tag_id
        const tag_id=e.target.getAttribute("data");
        const url=getT2Room(tag_id);
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>this.setState({live:data.data,showLive:true}))
    }

    componentWillMount(){
        // this.getAllLive();
        this.getAllDir();
        this.getT1();
    }

    render() {
        const sort=this.state.columns;
        const dir_list=this.state.dir.slice(0,9); 
        const liveList=this.state.live.slice(0); 
        const dir_lists=this.state.dir.slice(0); 
        return (
            <div>
                <div className={style.header}>
                    <Nav items={dir_list}/>
                </div>,
                <SideMenu key="dir-side-menu" sort={sort} onClick={this.getT2} />,
                <div className={style.contianer}>
                    <SortItems sort={sort} items={dir_lists} onClick={this.getT2} handleT2Room={this.getT2Room}
                    liveList={liveList} showLive={this.state.showLive} />    
                </div>
            </div>
        )
    }
}