import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "../pages/home/Home";
import ListProduct from "../pages/shop/ListProduct";
import EditProduct from "../pages/shop/EditProduct";

const routes = [
    {
        path: "/",
        exact: true,
        main: Home
    },
    {
        exact: true,
        path: "/product",
        main: ListProduct
    },
    {
        exact: true,
        path: "/product/edit",
        main: EditProduct
    }
];

class Router extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/product/edit">EditProduct</Link></li>
                    </ul>
                    <hr/>
                    <div className="main-route-place">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main/>}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default Router;
