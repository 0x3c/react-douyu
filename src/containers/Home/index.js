import React from 'react'
import 'whatwg-fetch'

import style from'./index.css'

import RoomList from '../../components/RoomList/RoomList.jsx'
import Nav from '../../components/Nav'

class Home extends React.Component{
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
    getAllLive(){
        fetch('/api/RoomApi/live')
        .then(resp=>{return resp.json()})
        .then(data=>this.setState({live:data.data}))
    }
    getAllDir(){
        fetch('/api/RoomApi/game')
        .then(resp=>{return resp.json()})
        .then(data=>this.sortDir(data.data))
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
            <div className={style.contianer} key="hom2">
                <RoomList list={live} title="所有直播" />
            </div>
        ]
    }

}
export default Home