import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar/Navbar";
import BlogPost from "../components/BlogPost/BlogPost";
import Footer from "../components/Footer/Footer";

class BlogPostPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <BlogPost/>
            </Fragment>
        );
    }
}

export default BlogPostPage;