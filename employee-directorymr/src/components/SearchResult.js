import React, { Component } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Container from "./Container";
import Header from "./Header";
import Card from "./Card";
import API from "../utils/API";

import "../style/style.css"


class SearchResult extends Component {
    state = {
        result: [],
        search: ""
    };
    componentDidMount() {
        this.employeeList();
    }

    employeeList = query => {
        API.getRandomEmployee(query)
            .then((res) => this.setState({ result: res }))
            //  console.log(res))
            .catch((err) => console.log(err))
    };


    // searchEmployee = query => {
    //     API.search(query)
    //         .then(res => this.setState({ results: res.data.data }))
    //         .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
       
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.employeeList(this.state.search);
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
                <Container results={this.state.result}/>

               
            </div>

        )
    }
}

export default SearchResult;