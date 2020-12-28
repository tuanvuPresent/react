import React, {Component} from 'react';

import NavBar from 'react-responsive-menubar/lib/NavBar';

export default class MenuBar extends Component {
    state = {showSideNav: false};

    handleSideNavToggle = () => {
        this.setState((currentState) => {
            return {showSideNav: !currentState.showSideNav}
        })
    };

    render() {
        return (
            <NavBar
                handleSideNavToggle={this.handleSideNavToggle}
                logo={'https://picsum.photos/200/300?image=10'}
                showSideNav={this.state.showSideNav}
                logoStyles={{height: "65px", width: "85px"}}
                navBarStyles={{boxShadow: "none"}}
                linkStyles={{color: "green", fontWeight: "bold"}}>

                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
            </NavBar>
        );
    }
}
