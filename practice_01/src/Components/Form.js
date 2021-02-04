import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header bg-transparent border-primary">Thêm mới</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modarator</option>
                                <option value={3}>Model</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;