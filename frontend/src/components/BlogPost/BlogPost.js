import React, {Component} from 'react';
import axios from 'axios';

const single_post = 'https://jsonplaceholder.typicode.com/posts/'
const comments = 'https://jsonplaceholder.typicode.com/posts/1/comments'


class BlogListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            single_post: {
                id: "",
                title: "",
                body: "",
            },
            comments: []
        }
    }

    componentDidMount() {
        this.singlePost()
        this.Comments()
    }


    singlePost() {
        axios.get(single_post)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    title: res.data.title,
                    body: res.data.body
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    Comments() {
        axios.get(comments)
            .then(res => {
                this.setState({
                    comments: res.data
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

                <div className="col-lg-8">
                    <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                    <hr/>

                    <p>Posted on January 1, 2017 at 12:00 PM</p>
                        <p className="font-weight-bold">{this.state.single_post.title}</p>
                                    <p>{this.state.single_post.body}</p>
                    <p>{this.state.id}</p>



                </div>


                Comments
                <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <textarea className="form-control" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>

                {this.state.comments.map(comment => (
                    <div>
                        <h4 className="card-title">{comment.name}</h4>
                        <p className="card-body">{comment.body}</p>
                    </div>

                ))}
            </div>
    );
    }
    }

    export default BlogListing;