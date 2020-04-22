import React,  { Component} from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Container from "./Container";
import Header from "./Header";
import Card from "./Card";
import API from "../utils/API";
// import employees from "../"
import "../style/style.css"


class SearchResult extends Component{
        state = {
            result : {},
            search : ''
        };
        componentDidMount() {
            this.employeeList();
        }
    
        employeeList = (query) => {
            API.getRandomEmployee(query)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        };


    // searchEmployee = query => {
    //     API.search(query)
    //         .then(res => this.setState({ results: res.data.data }))
    //         .catch(err => console.log(err));
    // };

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
                    // search={this.state.search}
                    // handleFormSubmit={this.handleFormSubmit}
                    // handleInputChange={this.handleInputChange}
                     />
                     <Container>
                    <Header/>
            {/* {this.state.friends.map(employees => ( */}
                <Card
                // name= {employees.first}
                // email= {employees.email}
                // phone= {employees.phone}
                // dob= {employees.dob.date}
                // image= {employees.thumbnail}
                
                />
             {/* ))} */}
            </Container>
            </div>

        )
    }
}

    export default SearchResult;