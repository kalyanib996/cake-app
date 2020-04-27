import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';



const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <div>
        <App />
        
    </div>
</Provider>, document.getElementById('root'));
