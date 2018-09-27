import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import RootReducer from './Reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(RootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();