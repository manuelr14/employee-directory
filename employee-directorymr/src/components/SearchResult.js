import React from "react";
import Header from "./Header";
import Card from "./Card";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Container from "./Container";

import "../style/style.css"

const styles = {

    info: {

 padding: "0px"


    }

  }; 

class Container extends Component{
    state = {
        search: "",
        results: []

}
handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
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
          handleInputChange={this.handleInputChange}/>
      <Container/>
      
  
      </div>
     
    );
  }
  