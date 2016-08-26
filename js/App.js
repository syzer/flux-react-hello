import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyButton from './Button';
import Home from './Route/Home'
import About from './Route/About'

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='about' component={About}/>
            <Route path='features' component={Features}/>
            <MuiThemeProvider>
                <MyButton />
            </MuiThemeProvider>
        </Route>
    </Router>,
    document.getElementById('app')
)
