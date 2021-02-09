import React, { Component } from 'react';
import { connect } from 'react-redux';
import fbData from './firebaseConnect';

class NoteForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            noteTitle: '',
            noteContent: '',
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = (title, content) => {
        var item = {};
        item.title = title;
        item.content = content;
        this.props.addDataStore(item); //sử dụng reducer trong store

    }

    render() {
        return (
            <div className="col-4">
                <h4>Sửa nội dung</h4>
                <form>
                    <div className="form-group">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" aria-describedby="helpId" placeholder="Điền tiêu đề" />
                    </div>
                    <div className="form-group">
                        <textarea onChange={(event) => this.isChange(event)} className="form-control" name="noteContent" rows={3} placeholder="...." defaultValue={""} />
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({ type: "ADD_DATA", item })
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        test: state.testConnect
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)