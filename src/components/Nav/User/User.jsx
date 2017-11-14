import React from 'react'

import "./user.css"
import user from './files/favicon.ico'

export default class User extends React.Component{
    render(){
        return <img className="user-img"
        src={user} alt="" />
    }
}