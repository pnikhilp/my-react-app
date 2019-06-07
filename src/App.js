import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'
// import Dashboard from './dashboard/Dashboard';
import NewLogin from './auth/NewLogin';
import StreamList from './components/streams/StreamList';
import rootReducer from './reducers';
import history from './history';

import './App.css';
// import PrivateRoute from './PrivateRoute';
import EditStream from './components/streams/EditStream';
import StreamCreate from './components/streams/StreamCreate';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(reduxThunk)));
const App = () => (
  <Provider store={store}>
     <Router history={history}>
     <div>
       <Route path='/login' component={NewLogin} />
       {/* <PrivateRoute path='/' exact component={Dashboard} /> */}
       <Route path='/' exact component={StreamList} />
       <Route path='/newstream' exact component={StreamCreate} />
       <Route path='/streams/edit/:id' exact component={EditStream} />
       {/* <PrivateRoute path='/home' exact component={Home} /> */}
     </div>
     </Router>
  </Provider>   
    );

export default App;
