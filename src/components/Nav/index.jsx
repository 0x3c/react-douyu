import React from 'react'

import './index.css'


// import User from './User/User.jsx'
import Logo from './Logo/Logo.jsx'
import NavList from './NavList/NavList.jsx'

function Nav(props){
    const items=props.items;
    return (
        <div className="nav">
            <Logo />
            <NavList items={items}/>
            {/* <User /> */}
        </div>
    )
}
export default Nav