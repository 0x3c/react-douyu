import React from 'react'

import './index.css'

class Nav extends React.Component{
    render(){
        return [
            <ul className="u1" key='u1'>
                <li>你好</li>
                <li>你好</li>
                <li>我好</li>
            </ul>,
            <ul className="u2" key="u2">
                <li>登录</li>
                <li>注册</li>
                <li>退出</li>
            </ul>
        ]
    }

}
export default Nav