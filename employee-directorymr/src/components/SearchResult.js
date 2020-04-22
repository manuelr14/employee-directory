import React,  { Component} from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Container from "./Container";
import API from "../utils/API";

import "../style/style.css"


class SearchResult extends Component {
    state = {
        search: "",
        results: []

    }


    searchEmployee = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.searchEmployee(this.state.search);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search);
    };


    render() {
        return (
            <div>
                <Navbar />
                <Searchbar
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                     />
                <Container results={this.state.results}/>


            </div>

        )
    }
}

    export default SearchResult;