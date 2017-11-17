import React from 'react'

import './directory.css'

import Nav from '../../components/Nav'
import SortItem from '../../components/SortItem'

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
    componentDidMount(){
    }

    render() {
        const dir_list=this.state.dir.slice(0,9); 
        return [
            <div className="home-header" key="hom1">
                <Nav items={dir_list}/>
            </div>,

        ]
    }
}