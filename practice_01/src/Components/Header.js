import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="jumbotron jumbotron-fluid text-center">
                        <h3 className="display-5 ">Practice Project</h3>
                        <p>with ReactJS</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;