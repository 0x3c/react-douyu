import React from 'react'
import './idex.css'
import 'whatwg-fetch'


import RoomList from '../../components/RoomList/RoomList.jsx'
import Nav from '../../components/Nav'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        };
        this.getAllLive=this.getAllLive.bind(this);
        this.getData=this.getData.bind(this);
    }
    getAllLive(){
        fetch('/api/RoomApi/live')
        .then(resp=>resp.json())
        .then(data=>this.setState({data:data.data}))
    }
    componentWillMount(){
        this.getAllLive()
    }
    componentDidMount(){
    }
    getData(){
        console.log(this.state)
    }
    render(){

        return [                
            <div className="home-header" key="hom1">
                <Nav />
            </div>,
            <div className="home-contianer" key="hom2">
                <RoomList list={this.state.data} />
            </div>,
            // <div>
            //     <embed width="640" height="360"  allownetworking="all" allowscriptaccess="always" 
            //     src="https://staticlive.douyucdn.cn/common/share/play.swf?room_id=97376" 
            //     quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" 
            //      type="application/x-shockwave-flash" />
            // </div>,
        ]
    }

}
export default Home