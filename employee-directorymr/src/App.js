import React from 'react';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Container from "./components/Container";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Container>
       <Header />
       <Card /> 
      </Container> />

    </div>
   
  );
}

export default App;
