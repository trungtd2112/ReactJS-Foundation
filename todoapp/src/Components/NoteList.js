import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note01">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                                    dọn nhà
                </a>
                            </h5>
                        </div>
                        <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="note01">
                            <div className="card-body">
                                lau nhà, quét nhà
              </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="note02">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                                    mua hoa
                </a>
                            </h5>
                        </div>
                        <div id="section2ContentId" className="collapse in" role="tabpanel" aria-labelledby="note02">
                            <div className="card-body">
                                hoa hồng có gai
              </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteList;