import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="side">
                <h2>Acuracy Biden is POTUS</h2>
                <h5>Sit on that</h5>
                <div className="fakeimg" style={{ height: 200 }}>Image</div>
                <p>No Bannons approved</p>
                <h3>That's it</h3>
                <p>That's it.</p>
                <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
                <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
                <div className="fakeimg" style={{ height: 60 }}>Image</div>
            </div>
        );
    }
}

export default Sidebar