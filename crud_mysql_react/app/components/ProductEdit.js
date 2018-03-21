import React, { Component } from 'react';
import axios from 'axios';

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price: null
    }
  }

  submitForm(event) {
    event.preventDefault();
    const data = $(event.target).serialize();
    toastr.clear();
    const isError = false;
    if(this.state.name === "") {
      toastr.error("Product name must be filled");
      isError = true;
    }
    if(this.state.price === 0 || this.state.price === '') {
      toastr.error("Product price must be filled!");
      isError = true;
    }
    if(!isError) {
      toastr.info("Inserting new product data...");
      axios.post('/products', {
        name: this.state.name,
        price: this.state.price
      }).then(function(response) {
        toastr.clear();
        location.href = '#/product/list';
      }).catch(function(error) {
        toastr.clear();
        toastr.error(error);
      });
    }
  }

  onProductNameChange(e) {
    this.setState({
      id: this.state.id,
      name: e.target.value.trim(),
      price: this.state.price
    })
  }

  onPriductPriceChage(e) {
    this.setState({
      id: this.state.id,
      name: this.state.name,
      price: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="productEmail">Name : </label>
            <div className="col-sm-10">
              <input 
                type="text" 
                name="productName" 
                onChange={this.onProductNameChange.bind(this)} 
                id="productName" 
                className="form-control" 
                placeholder="Product Name" 
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductEdit;