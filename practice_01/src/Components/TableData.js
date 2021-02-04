import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {

    mappingDataUsers = () => this.props.dataUsersProps.map((user) => (
        <TableRow key={user.id} id={user.id} name={user.name} phone={user.phone} permission={user.permission} userData={user}></TableRow>
    ))


    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUsers()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;