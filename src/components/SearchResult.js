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




    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });
        // this.sortEmployee(this.state.search)
       
    };

    handleFormSubmit = event => {
        event.preventDefault();
        // this.employeeList(this.state.search);
        this.sortEmployee(this.state.search);
    };

    sortEmployee = login => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const employees = this.state.result.filter(employee => employee.login == this.state.search);
        // Set this.state.friends equal to the new friends array
        console.log(employees)
        // this.setState({ result:employees });
      };

    render() {

        return (
            <div>
                <Navbar />
                <Searchbar
                value={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <Container results={this.state.result}
                
                search={this.state.search}
                />

               
            </div>

        )
    }
}

export default SearchResult;