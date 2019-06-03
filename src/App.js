import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Dashboard from './dashboard/Dashboard';
import NewLogin from './auth/NewLogin';
import rootReducer from './reducers';
import './App.css';
import PrivateRoute from './PrivateRoute';
const store = createStore(rootReducer);
const App = () => (
  <Provider store={store}>
     <Router>
     <div>
       <Route path='/login' component={NewLogin} />
       <PrivateRoute path='/' exact component={Dashboard} />
       {/* <PrivateRoute path='/home' exact component={Home} /> */}
     </div>
     </Router>
  </Provider>   
    );

export default App;
