import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="https:/www.google.com">Home</a>
                <a href="https:/www.microsoft.com">About</a>
                <a href="#" className="right">Contact</a>
            </div>
        );
    }
}

export default Navbar