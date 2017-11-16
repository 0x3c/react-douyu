import React from 'react'

import './drop.css'

export default function Drop(props){
    const isHover=props.isHover;
    return(
        isHover ?
        <i className="drop-icon drop-icon-hover"></i>
        :
        <i className="drop-icon" ></i>
    )
}