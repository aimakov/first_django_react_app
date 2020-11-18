import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './Layout/Header';
import Dashboards from './Leads/Dashboard';
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
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className='container'>
                            <Dashboards />
                        </div>

                    </Fragment>
                </AlertProvider>
            </Provider>


        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));