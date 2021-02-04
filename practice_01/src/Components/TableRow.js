import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td >{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.permission}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning edit">
                            <i className="fa fa-pencil" aria-hidden="true" />
                                    Sửa
                                </div>
                        <div className="btn btn-danger delete">
                            <i className="fa fa-trash" aria-hidden="true" />
                                    Xóa
                                </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;