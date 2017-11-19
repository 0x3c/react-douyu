import React from 'react'

// import './index.css'

import loadpic from './files/loading0.gif'

//试玩内联样式
//内联样式定义
const loading_box={
    width: "100%",
    height: "100%",
    background: "rgb(6,39,52)",
}
const loading_img={
    margin: "0 auto",
    display: "block",
    width: "10%",
    height: "auto",
}

export default function Loading(props){
    return (
        <div style={loading_box}>
                <img style={loading_img} src={loadpic} alt="loading"/>
        </div>
    )
}