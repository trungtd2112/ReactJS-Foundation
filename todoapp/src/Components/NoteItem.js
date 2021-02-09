import React, { Component } from 'react';

class NoteItem extends Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={this.props.i}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="section1ContentId">
                            {this.props.title} </a>
                    </h5>
                </div>
                <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby={this.props.i}>
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;