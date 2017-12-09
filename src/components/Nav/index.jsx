import React from 'react'

import style from './index.css'


// import User from './User/User.jsx'
import Logo from './Logo/Logo.jsx'
import NavList from './NavList/NavList.jsx'


function Nav(props){
    const items=props.items;
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <Logo />
                <NavList items={items}/>
                {/* <User /> */}
            </div>
        </div>
    )
}
export default Nav