import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SideNav, {NavIcon, NavItem, NavText} from "@trendmicro/react-sidenav";
import Home from "../pages/home/Home";
import ListProduct from "../pages/shop/ListProduct";

const styles = {
    background: '#000',
    width: '2px',
    cursor: 'col-resize',
    margin: '0 5px',
    height: '100%',
};

class RouterSideNav extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route render={({location, history}) => (
                        <React.Fragment>
                            <SideNav
                                onSelect={(selected) => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}
                            >
                                <SideNav.Toggle/>
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Home
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="product">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-product" style={{fontSize: '1.75em'}}/>
                                        </NavIcon>
                                        <NavText>
                                            Product
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            <main>
                                <Route exact path="/home" component={Home}/>
                                <Route exact path="/product" component={ListProduct}/>
                            </main>
                        </React.Fragment>
                    )}
                    />
                </Router>
            </div>
        )
    }
}

export default RouterSideNav
