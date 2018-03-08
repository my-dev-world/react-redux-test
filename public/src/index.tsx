import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configure, history } from './config/configure-store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configure();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('aurita-app')
);

registerServiceWorker();
