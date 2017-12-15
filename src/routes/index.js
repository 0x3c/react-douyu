import React from 'react'
import {BrowserRouter  as Router,Route,Switch} from 'react-router-dom'

import Home from '../containers/Home'
import Lives from '../containers/Lives/Lives.jsx'
import Directory from '../containers/Directory/Directory.jsx'
import Live from '../components/Live/Live.jsx'

const Routes=()=>(
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/directory" exact  component={Directory}/>
            <Route path="/live/:id" exact  component={Live}/>
            <Route path="/directory/:parent_name/:short_name" exact  component={Lives}/>
            <Route path="/search/:search_str" exact component={Lives} />
        </Switch>
    </Router>
)
export default Routes;