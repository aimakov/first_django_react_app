import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Layout/Header';
import Dashboard from './Leads/Dashboard';
import Alerts from './Layout/Alerts';

import { Provider } from 'react-redux';
import store from '../store';

import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// import './App.css'

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Switch>
                                    <Route exact path='/' component={Dashboard} />
                                </Switch>

                            </div>

                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider >


        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));