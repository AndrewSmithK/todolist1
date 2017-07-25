import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import todoApp from "./reducers/reducers";
import TodoApp from "./components/TodoApp";
import { Router, Route, browserHistory } from 'react-router';
import {syncHistoryWithStore, routerReducer} from "react-router-redux";


const store = createStore(
    combineReducers({todoApp,
    routing: routerReducer})
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={TodoApp} />
        </Router>
    </Provider>,
    document.getElementById("app")
);