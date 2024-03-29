import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from "redux-logger";
import { initializeIcons } from '@uifabric/icons';

import App from './App';
import appReducer from './duck/appReducer';
import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
    fonts: {
        small: {
            fontSize: '14px'
        },
        medium: {
            fontSize: '16px'
        },
        large: {
            fontSize: '20px',
            fontWeight: '600'
        },
        xLarge: {
            fontSize: '22px',
            fontWeight: '600'
        }
    },
    effects: { roundedCorner2: "6px" }
});

initializeIcons();

const store = createStore(
    appReducer,
    applyMiddleware(ReduxThunk, logger),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
