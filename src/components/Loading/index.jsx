import React from 'react'
import FontAwesome from 'react-fontawesome'
// import './index.css'

import loadpic from './files/loading0.gif'

//试玩内联样式
//内联样式定义
const loading_box={
    width: "100%",
    height: "100%",
    textAlign: "center",
    // background: "rgb(6,39,52)",
}
const loading_img={
    margin: "0 auto",
    display: "block",
}

export default function Loading(props){
    return (
        <div style={loading_box}>
                {/* <img style={loading_img} src={loadpic} alt="loading"/> */}
                <FontAwesome className="fa-spinner fa-pulse " />
        </div>
    )
}