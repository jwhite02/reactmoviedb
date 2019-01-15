import React, { Component } from 'react';

class SearchBar extends Component {

     handleChange = (event) => {
        if (event.target.name === "fname") {
            this.setState({ fname: event.target.value });
        }
        if (event.target.name === "lname") {
            this.setState({ lname: event.target.value });
        }
    }
    render() {
        return (
            <div>
                <form class="" onSubmit="" />
                    <label for=" ">
                        <span id="" class=""> Text  </span><input type="text" name="" id="" placeholder="" value="" size="" />
                    </label>
                    <label for=" ">
                        <span id="" class=""> Text  </span><input type="text" name="" id="" placeholder="" value="" size="" />
                    </label>
                <form />
            </div>
        );
    }
}

export default SearchBar; 