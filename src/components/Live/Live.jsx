import React from 'react'
import style from './live.css'
// import { hashHistory } from 'react-router-dom';

export default class Live extends React.Component{
    constructor(props){
        super(props);
        this.state={
            room_id:0
        }
    }
    componentWillMount(){
        const id=this.props.match.params.id
        this.setState({room_id:id});
    }

    render(){
        return(
            // <div className={style.warpper}>
                <embed width="640" height="360" allownetworking="all" allowscriptaccess="always" 
                src={`https://staticlive.douyucdn.cn/common/share/play.swf?room_id=${this.state.room_id}`} quality="high" 
                bgcolor="#000" wmode="window" allowfullscreen="true" 
                allowFullScreenInteractive="true" type="application/x-shockwave-flash"></embed>
            // </div>
        )
    }
}