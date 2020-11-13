import React, {Component} from 'react';
import AppRoute from "./router/AppRoute";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (

            <div>
                <BrowserRouter>

                    <Navbar/>
                    <AppRoute/>

                </BrowserRouter>

            </div>
        );
    }
}

export default App;