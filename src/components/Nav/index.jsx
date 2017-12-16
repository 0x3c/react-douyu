import React from 'react'

import style from './index.css'


// import User from './User/User.jsx'
import Logo from './Logo/Logo.jsx'
import NavList from './NavList/NavList.jsx'
import Search from './Search/Search'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dir:[]
        }
        this.getAllDir=this.getAllDir.bind(this);
        this.sortDir=this.sortDir.bind(this);
    }
    getAllDir(){
        fetch('/api/RoomApi/game')
        .then(resp=>{return resp.json()})
        .then(data=>this.sortDir(data.data))
    }
    sortDir(data){
        const dir=data;
        dir.sort(function(x,y){
        return x.cate_id-y.cate_id
        });
        this.setState({dir:dir})
    }
    componentWillMount(){
        this.getAllDir();
    }
    render(){
        const items=this.state.dir.length>0 ? this.state.dir.slice(0,9) : false;
        return (
            <div className={style.header}>
                {   items ?
                    <div className={style.nav}>
                        <Logo />
                        <NavList items={items}/>
                        <Search />
                        {/* <User /> */}
                    </div>
                :
                null

                }
            </div>
        )
    }
}
export default Nav