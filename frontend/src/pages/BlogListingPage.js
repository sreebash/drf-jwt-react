import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar/Navbar";
import BlogListing from "../components/BlogListing/BlogListing";
import Footer from "../components/Footer/Footer";

class BlogListingPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <BlogListing/>
                <Footer/>
            </Fragment>
        );
    }
}

export default BlogListingPage;