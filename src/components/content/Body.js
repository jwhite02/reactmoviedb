import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div className="mybody">
                {this.props.children}
            </div>
        );
    }
}

export default Body;