import React, { Component } from 'react';
import axios from 'axios';

import TableClass from '../../classes/TableClass';

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.getProductList();

    this.state = {
      cols: [
        {key: 'dataHeaderId', label: 'Id'},
        {key: 'dataHeadrName', lable: 'Name'},
        {key: 'dataHeaderPrice', label: 'Price'},
        {key: 'dataHeaderCreateAt', label: 'Created At'}
      ],
      data : [

      ]
    };
  }

  getProductList() {
    toastr.info('Fetching product list...');
    const self = this;
    axios.get('products').then(function(response) {
      toastr.clear();
      self.setState({
        cols: self.state.cols,
        data: response.data
      });
    }).catch(function(error) {
      toastr.clear();
      toastr.error(error);
    })
  }

  updateProduct(data) {
    const id = $(data.target).data('id');
    location.href='#/product/edit/' + id;
  }

  deleteProduct(data) {
    const id = $(data.target).data('id');
    $('#deleteConfirmationModal').modal('show');
    $('#deleteButton').attr('data-id', id);
  }

  doDeleteProduct(data) {
    const id = $(data.target).data('id');
    toastr.info('Deleting product...');
    axios.delete('products/' + id).then(function(response) {
      toastr.clear();
      $(".data-row[data-id='" + id + "']").slideUp();
    }).catch(function(error) {
      toastr.clear();
      toastr.error(error);
    });
  }

  render() {
    return (
      <div>
        <TableClass cols={this.state.cols} data={this.state.data} onDelete={this.deleteProduct} onUpdate={this.updateProduct} />
        <div className="modal fade" id="deleteConfirmationModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="colse" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Delete Item</h4>
              </div>
              <div className="modal-body">
                <p>Are you sure want to delete this item?</p>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-default" 
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button 
                  type="button" 
                  className="btn ben-danger" 
                  id="deleteButton" 
                  onClick={this.doDeleteProduct.bind(this)} 
                  data-dismiss="modal"
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;