import React, { Component } from 'react';

class NoteForm extends Component {

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })
    }

    addData = (title, content) => {
        var item = {};
        item.title = title;
        item.content = content;
        this.props.getData(item);
    }

    constructor(props) {
        super(props)
    
        this.state = {
            noteTitle : '',
            noteContent :  ''
        }
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
                <button type="reset" onClick={()=>this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary">Lưu</button>
                </form>
            </div>
        );
    }
}

export default NoteForm;