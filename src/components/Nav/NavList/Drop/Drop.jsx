import React from 'react'

import './drop.css'

import drop from './files/assort-icon.png'
import dropHover from './files/assort-icon-hover.png'

export default function Drop(props){
    return(
        <i className="drop-icon" background={drop}></i>
    )
}