import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : ""
        }
    }
    
    isChange = (event) => {
        this.props.getKeyword(this.state.tempValue)
        this.setState({
            tempValue : event.target.value
        });
    }

    showButton = () => {
        if (this.props.willShowForm === false) {
            return <div className="btn btn-info" onClick={() => this.props.conn()}>Add User</div>;
        } else {
            return <div className="btn btn-secondary" onClick={() => this.props.conn()}>Close</div>;
        }
    }

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input name="fSearch" onChange={(event) => this.isChange(event)} style={{ width: '774px' }} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                        <div className="btn btn-info" onClick={() => this.props.getKeyword(this.state.tempValue)}>Tìm</div>
                    </div>
                &ensp;&ensp;&ensp;&ensp;
                <div className="btn-group">
                        {this.showButton()}
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default SearchForm;