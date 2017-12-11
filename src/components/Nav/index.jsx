import React from 'react'

import style from './index.css'


// import User from './User/User.jsx'
import Logo from './Logo/Logo.jsx'
import NavList from './NavList/NavList.jsx'
import Search from './Search/Search'

function Nav(props){
    const items=props.items;
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <Logo />
                <NavList items={items}/>
                <Search />
                {/* <User /> */}
            </div>
        </div>
    )
}
export default Nav