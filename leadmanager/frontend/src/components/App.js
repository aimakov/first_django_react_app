import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './Layout/Header';
import Dashboards from './Leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

// import './App.css'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className='container'>
                        <Dashboards />
                    </div>

                </Fragment>
            </Provider>


        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));