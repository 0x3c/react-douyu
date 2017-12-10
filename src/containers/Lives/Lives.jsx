import React from 'react'
import 'whatwg-fetch'

import style from'./lives.css'

import RoomList from '../../components/RoomList/RoomList.jsx'
import Nav from '../../components/Nav'


import {getT2Room} from '../../utils/API.js'
class Lives extends React.Component{
    constructor(props){
        super(props);
        this.state={
            live: {},
            dir: []
        };
        this.getAllLive=this.getAllLive.bind(this);
        this.getAllDir=this.getAllDir.bind(this);
        this.sortDir=this.sortDir.bind(this);
    }
    // 获取当前频道所有 live
    getAllLive(){
        // 获取二级频道
        const short_name=this.props.match.params.short_name;
        const url=getT2Room(short_name);
        fetch(url)
        .then(resp=>{return resp.json()})
        .then(data=>this.setState({live:data.data}))
    }

    // 初始化菜单中频道
    getAllDir(){
        fetch('/api/RoomApi/game')
        .then(resp=>{return resp.json()})
        .then(data=>this.sortDir(data.data))
    }
    // 对频道排序
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
    }
    componentDidMount(){
    }
    render(){
        const dir_list=this.state.dir.slice(0,9); 
        const live=this.state.live
        return [         
            <div className={style.header}  key="hom1">       
                <Nav items={dir_list} />
            </div>,
            <div className={style.contianer} key="hom2" >
                <RoomList list={live} title={live.length>0 && live[0].game_name} />
            </div>
        ]
    }

}
export default Lives