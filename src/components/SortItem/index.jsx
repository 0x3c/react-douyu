import React from 'react'

import './index.css'

export default class SortItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            live: {},
            dir: []
        };
    }
    render(){

        return(
            <li className="sort-item">
            <a className="sort-item-box">
                <img className="sort-item-thum"/>
                <p className="sort-item-title">绝地求生</p>
                <div className="sort-item-shadow">

                </div>
            </a>
          </li>
        );
    }
}