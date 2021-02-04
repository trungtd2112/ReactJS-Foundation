import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json'
class News extends Component {
    render() {
        return (
            <div>
                <section className="download bg-primary text-center" id="download">
                    <div className="container">
                        <div className="row">
                            {
                                data.map((value, key) => {
                                    return (
                                        <NewsItem key={key} anh={value.anh} tieuDe={value.tieuDe} trichDan={value.trichDan}
                                            tinID={value.id}
                                        >

                                        </NewsItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <div className="cta-content">
                        <div className="container">
                            <h2>Stop waiting.<br />Start building.</h2>
                            <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                        </div>
                    </div>
                    <div className="overlay" />
                </section>
                <section className="contact bg-primary" id="contact">
                    <div className="container">
                        <h2>We
              <i className="fas fa-heart" />
              new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="list-inline-item social-twitter">
                                <a href="#">
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

export default News;