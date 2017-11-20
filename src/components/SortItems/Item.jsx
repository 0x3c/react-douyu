import React from 'react'

import style from './item.css'

export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHover:false
        }
        this.isHover=this.isHover.bind(this)
        this.isLeave=this.isLeave.bind(this)
    }
    isHover(){
        this.setState({
            isHover:true
        })
    }
    isLeave(){
        this.setState({
            isHover:false
        })
    }
    render(){
        const isHover=this.state.isHover;
        return(
            <li className={style.itemContainer}>
                <a className={style.itemBox} onMouseEnter={this.isHover} 
                    onMouseLeave={this.isLeave}>
                    <img className={style.itemThum} src={this.props.item.game_src} 
                    style={isHover?{opacity: 0.8}:null} alt="xx" />
                    <p className={style.itemTitle} style={isHover?{borderBottomColor: "#D2D2D2"}:null}>
                        <a>{this.props.item.game_name}</a>
                    </p>
                </a>
            </li>
        )
    }
}