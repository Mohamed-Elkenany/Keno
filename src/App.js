import React, { Component } from "react";
import Home from "./pages/Home";
import Prodectlist from "./pages/Prodectlist";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
class App extends Component{
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}
export default App;