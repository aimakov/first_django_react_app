import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Layout/Header';
import Dashboard from './Leads/Dashboard';
import Alerts from './Layout/Alerts';

import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';

import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { loadUser } from '../actions/auth';

// import './App.css'

//Alert Options
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER
}
class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }

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
                                    <PrivateRoute exact path='/' component={Dashboard} />
                                    <Route exact path='/register' component={Register} />
                                    <Route exact path='/login' component={Login} />
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