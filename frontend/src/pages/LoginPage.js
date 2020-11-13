import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Login/>
                <Footer/>

            </div>
        );
    }
}

export default LoginPage;