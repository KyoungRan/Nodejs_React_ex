import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Home from './components/Home';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductNew from './components/ProductNew';
import ProductEdit from './components/ProductEdit';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand">Simple CRUD</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/product">Product Managment</a></li>
                    <li><a href="#/about">About</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <Router history={hashHistory}>
              <Route path="/" component={Home} />
              <Route path="/product" component={Product}>
                <Route path="/product/list" component={ProductList} />
                <Route path="/product/new" component={ProductNew} />
                <Route path="/product/edit/:productId" component={ProductEdit} />
              </Route>
              <Route path="/about" componen={About} />
            </Router>
          </div> 
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));