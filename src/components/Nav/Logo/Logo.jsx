import React from 'react'

import './logo.css'
import url from './files/react-logo.jpg'

export default class Logo extends React.Component{
    render(){
        return <img className='nav-logo'
         src={url} alt=""/>
    }
}