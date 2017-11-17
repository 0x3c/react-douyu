import react from 'react'

import './directory.css'

import Nav from '../../components/Nav'
import SortItem '../../components/SortItem'

export default class Directory extends react.Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount(){

    }

    render() {

        return [
            <Nav key="dir-1" />

        ]
    }
}