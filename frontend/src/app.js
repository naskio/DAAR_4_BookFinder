import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';
import Root from './root';

const {persistor, store} = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <Root/>
                </PersistGate>
            </Provider>
        );
    }
}
