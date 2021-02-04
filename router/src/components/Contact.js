import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isRedirect : false,
            fEmail : "",
            fPassword : ""
        }
    }

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        }) 
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect : true
        })
    }

    render() {
        if(this.state.isRedirect === true){
            return <Redirect to = "/"/>;
        }
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-7 my-auto">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onChange={(event) => this.isChange(event)} name="fEmail" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onChange={(event) => this.isChange(event)} name="fPassword" type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={(event) => this.submitForm(event)}>Submit</button>
                                </form>
                            </div>
                            <div className="col-lg-5 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">
                                                <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="contact bg-primary" id="contact">
                    <div className="container">
                        <h2>We
              <i className="fas fa-heart" />
              new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="list-inline-item social-twitter">
                                <a href="/#">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item social-facebook">
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item social-google-plus">
                                <a href="#">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;