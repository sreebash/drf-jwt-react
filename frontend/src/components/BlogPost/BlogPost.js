import React, {Component} from 'react';
import axios from 'axios';

const single_post = 'https://jsonplaceholder.typicode.com/posts/1'
const comments = 'https://jsonplaceholder.typicode.com/posts/1/comments'

class BlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            single_post: [],
            comments: []
        }
    }

    componentDidMount() {
        this.blogList()
        this.comments()
    }


    blogList() {
        axios.get(single_post)
            .then(res => {
                this.setState({
                    single_post: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    comments() {
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

                {/*{this.state.single_post.map(post => (*/}

                {/*        // <!-- Post Content Column -->*/}
                {/*        <div className="">*/}

                {/*            // <!-- Preview Image -->*/}

                {/*            <hr/>*/}

                {/*            <!-- Date/Time -->*/}
                {/*            <p>Posted on January 1, 2017 at 12:00 PM</p>*/}

                {/*            <hr/>*/}

                {/*            <!-- Post Content -->*/}

                {/*            <p className="lead"> {post.title}</p>*/}

                {/*            <p>{post.body}</p>*/}

                {/*            <p>{post.body}</p>*/}

                {/*            <blockquote className="blockquote">*/}
                {/*                <p className="mb-0">{post.title}</p>*/}
                {/*                <footer className="blockquote-footer">Someone famous in*/}
                {/*                    <cite title="Source Title">{post.body}</cite>*/}
                {/*                </footer>*/}
                {/*            </blockquote>*/}

                {/*            <p>{post.body}</p>*/}
                {/*            <hr/>*/}


                {/*            ))}*/}


                {/*            <!-- Comments Form -->*/}
                {/*            <div className="card my-4">*/}
                {/*                <h5 className="card-header">Leave a Comment:</h5>*/}
                {/*                <div className="card-body">*/}
                {/*                    <form>*/}
                {/*                        <div className="form-group">*/}
                {/*                            <textarea className="form-control" rows="3"></textarea>*/}
                {/*                        </div>*/}
                {/*                        <button type="submit" className="btn btn-primary">Submit</button>*/}
                {/*                    </form>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <!-- Single Comment -->*/}
                {/*            {this.state.comments.map(comment => (*/}
                {/*                <div className="media mb-4">*/}
                {/*                    <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>*/}
                {/*                    <div className="media-body">*/}
                {/*                        <h5 className="mt-0">{comment.title}</h5>*/}
                {/*                        {comment.body}*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*            ))}*/}


                {/*            <!-- Comment with nested comments -->*/}
                {/*            <div className="media mb-4">*/}
                {/*                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>*/}
                {/*                <div className="media-body">*/}
                {/*                    <h5 className="mt-0">Commenter Name</h5>*/}
                {/*                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante*/}
                {/*                    sollicitudin. Cras*/}
                {/*                    purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum*/}
                {/*                    nunc ac nisi*/}
                {/*                    vulputate fringilla. Donec lacinia congue felis in faucibus.*/}

                {/*                    <div className="media mt-4">*/}
                {/*                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt=""/>*/}
                {/*                        <div className="media-body">*/}
                {/*                            <h5 className="mt-0">Commenter Name</h5>*/}
                {/*                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque*/}
                {/*                            ante*/}
                {/*                            sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus*/}
                {/*                            viverra turpis. Fusce*/}
                {/*                            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis*/}
                {/*                            in faucibus.*/}
                {/*                        </div>*/}
                {/*                    </div>*/}


                {/*                </div>*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*)*/}
                {/*}*/}
                }

            </div>
        )
    }
}


export default BlogPost;
