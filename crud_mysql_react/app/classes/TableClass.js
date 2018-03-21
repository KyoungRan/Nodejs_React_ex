import React, { Component } from 'react';

class TableClass extends Component {
  bindHeader = () => {
    const cols = this.props.cols;
    const elements = cols.map(function(colHeader) {
      return <th key={colHeader.key}>{colHeader.label}</th>
    });
    // action column
    elements.push(<th key="dataHeaderAction">Action</th>);
    return elements; 
  }
  
  bindData = () => {
    const data = this.props.data;
    const self = this;
    return data.map(function(colData) {
      const rowElement = [];
      $.each(colData, function(key, val) {
        rowElement.push(<td key={key}>{val}</td>)
      });
    });
    // action column
    rowElement.push(
      <td key="actionColumn">
        <div className="col-md-2">
          <button 
            className="btn btn-xs btn-primary" 
            onClick={self.props.onUpdate}
            data-id={colData.id}
          >
            Edit
          </button>
        </div>
      </td>
    );
    return (
      <tr 
        className="data-row" 
        data-id={colData.id} 
        key={colData.id}
      >
        {rowElement}
      </tr>
    )
  }
  render() {
    const tableHeaer = this.bindHeader();
    const tableData = this.bindData();

    return (
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
}

export default TableClass;