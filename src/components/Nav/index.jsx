import React from 'react'

import './index.css'


// import User from './User/User.jsx'
import Logo from './Logo/Logo.jsx'
import NavList from './NavList/NavList.jsx'

class Nav extends React.Component{
    render(){
        return (
            <div className="nav">
                <Logo />
                <NavList />
                {/* <User /> */}
            </div>
        )
    }

}
export default Nav