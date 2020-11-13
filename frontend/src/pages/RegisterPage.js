import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar/Navbar";
import BlogListing from "../components/BlogListing/BlogListing";
import Footer from "../components/Footer/Footer";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

class RegisterPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Register/>
                <Footer/>

            </Fragment>
        );
    }
}

export default RegisterPage;