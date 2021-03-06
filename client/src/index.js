import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { createStore, StoreProvider } from 'easy-peasy';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App';
import model from './store';

toast.configure()
const store = createStore(model)

ReactDOM.render(<StoreProvider store={store}><Router> <App /></Router></StoreProvider>, document.getElementById('root'));