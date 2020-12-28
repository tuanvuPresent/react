import React, {Component} from "react";
import SideNav, {NavIcon, NavItem, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class CustomSideNav extends Component {
    render() {
        return (
            <SideNav
                onSelect={selected => {
                    // Add your code here

                }}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{fontSize: "1.75em"}}/>
                        </NavIcon>
                        <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="Shops">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{fontSize: "1.75em"}}
                            />
                        </NavIcon>
                        <NavText>Shops</NavText>
                        <NavItem eventKey="Shops/product">
                            <NavText>Product</NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="Settings">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{fontSize: "1.75em"}}/>
                        </NavIcon>
                        <NavText>Settings</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}

export default CustomSideNav
