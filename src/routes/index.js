import React from 'react'
import {BrowserRouter  as Router,Route,Switch} from 'react-router-dom'

import Home from '../containers/Home'
import Directory from '../containers/Directory/Directory.jsx'
import comic from '../containers/comic.jsx'

const Routes=()=>(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/directory" exact component={Directory}/>
        </Switch>
    </Router>
)
export default Routes;