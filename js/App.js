import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

import App from '../components/App'
import Home from '../components/Home'
import About from '../components/About'
import Features from '../components/Features'

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='about' component={About}/>
            <Route path='features' component={Features}/>
        </Route>
    </Router>,
    document.getElementById('app')
)




const App = () => (
    <MuiThemeProvider>
        <MyAwesomeReactComponent />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
