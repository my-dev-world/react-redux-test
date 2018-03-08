import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Containers
import Home from './Containers/Home/Home';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/app/home' component={Home} />
                    <Redirect to='/app/home' />
                </Switch>
            </div>
        );
    }
}

export default App;
