import React from 'react'

import style from './SideMenu.css'

import {getFetchData} from '../../utils/API.js'

export default class SideMenu extends React.Component{
    componentDidMount(){
        getFetchData();
    }
    render(){
        return(
            <div className={style.container}>
                <div className={style.wrapper}>
                    {/* 填装一级分类 */}

                    dasd
                </div>
            </div>
        )
    }
}