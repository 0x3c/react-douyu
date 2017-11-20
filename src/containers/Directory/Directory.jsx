import React from 'react'
// import fx from '../../utils/API.js'
import style from './directory.css'

import Nav from '../../components/Nav'
import SortItems from '../../components/SortItems'
import SideMenu from '../../components/SideMenu/SideMenu'

export default class Directory extends React.Component {
    constructor(props) {
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
        .then(resp=>resp.json())
        .then(data=>this.setState({live:data.data}))
    }
    getAllDir(){
        fetch('/api/RoomApi/game')
        .then(resp=>resp.json())
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

    render() {
        const dir_list=this.state.dir.slice(0,9); 
        const dir_lists=this.state.dir.slice(0); 
        return [
            <div className={style.header} key="dir-header">
                <Nav items={dir_list}/>
            </div>,
            <SideMenu key="dir-side-menu" />,
            <div className={style.contianer} key="dir-items" >
                <SortItems items={dir_lists}/>    
            </div>
           
    ]
    }
}