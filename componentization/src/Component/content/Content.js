import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: 0
        }
    }

    thongbao = () => { alert("Hai Tu xinh dep"); }

    renderButton = () => {
        return (
            <div className="btn btn-group">
                <div className="btn btn-warning" onClick = {() => this.editClick()}>Edit</div>
                <br/>
                <div className="btn btn-danger" >Delete</div>
            </div>
        );
    }

    renderForm = () => {
        return (
            <div className="form-group">
                <input defaultValue={this.props.tieude} type="text" name="ten" className="form-control" />
                <div className="btn btn-info float-left mt-10" onClick = {() => this.saveClick()}>Save</div>
            </div>
        );
    };

    displayCheck = () => {
        if (this.state.trangThai === 0) {
            return this.renderButton();
        }else{
            return this.renderForm();
        }
    }

    editClick = () => {
        this.setState({
            trangThai : 1
        });    
    }

    saveClick = () => {
        this.setState({
            trangThai : 0
        });    
    }
    


    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 " + this.props.vitri}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.anh} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <h2 className="display-4">{this.props.tieude}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                            </div>

                            {this.displayCheck()}

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;