import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from './components/routing-utils/PrivateRoute';
import Items from './components/routes/items';
import Orders from './components/routes/orders';
import Contactinfo from './components/routes/contactinfo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

class PApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            < PrivateRoute authed={this.props.isAuthenticated} path="/items" component={Items} />
            < PrivateRoute authed={this.props.isAuthenticated} path="/orders" component={Orders} />
            < PrivateRoute authed={this.props.isAuthenticated} path="/contactinfo" component={Contactinfo} />
          </div>
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}

const App = connect(mapStateToProps, {})(PApp)
export default App;
