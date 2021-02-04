import React, { Component } from 'react';
import data from './data.json'

class Details extends Component {
    render() {
        var tinID = this.props.match.params.id;
        return (
            data.map((value, key) => {
                if (value.id == tinID) {
                    return (
                        <section className="download bg-primary text-center" id="download">
                            <div className="container">
                                <div className="col-md-12 mx-auto">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{value.tieuDe}</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                            <a href="details.html" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            })
        );
    }
}

export default Details;