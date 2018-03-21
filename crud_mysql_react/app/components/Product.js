import React, { Component } from 'react';
import { Link } from 'react-router';

class Product extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Product Management</div>
        <div className="panel-body">
          <ul className="nav nav-tabs">
            <li><Link activaClassName="active" to="product/list">Product</Link></li>
            <li><Link activaClassName="active" to="product/new">Add New Product</Link></li>
          </ul>
          <br />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Product;