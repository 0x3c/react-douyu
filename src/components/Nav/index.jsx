import React from 'react'

import './index.css'


// import User from './User/User.jsx'
import Logo from './Logo/Logo.jsx'
import NavList from './NavList/NavList.jsx'

function xx(){
    console.log(window.location.pathname)
}

function Nav(props){
    const items=props.items;
    return (
        <div className="header">
            <div className="nav">
                <Logo />
                <NavList items={items}/>
                {/* <User /> */}
                <button onClick={xx}>xxx</button>
            </div>
        </div>
    )
}
export default Nav