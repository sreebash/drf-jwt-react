import React, {Component} from 'react';
import axios from 'axios';
import {Link, NavLink} from "react-router-dom";

const data = 'https://jsonplaceholder.typicode.com/posts'


class BlogListing extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.blogListing()
    }


    blogListing() {
        axios.get(data)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container"><br/><br/>
                <h1 className="mt-4 mb-3">Blog Home Two
                    <small>Subheading</small>
                </h1>

                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Blog Home 2</li>
                </ol>

                {this.state.data.map(item => (

                    <div className="card mb-4">

                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="/posts/">
                                        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                                    </Link>

                                </div>
                                <div className="col-lg-6">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className="card-text">{item.body}</p>

                                    <a href="#" className="btn btn-primary">Read More &rarr;</a>
                                </div>

                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2017 by
                            <a href="#">Start Bootstrap</a>
                        </div>

                    </div>

                ))}
            </div>
        );
    }
}

export default BlogListing;