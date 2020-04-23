import React from "react";
import Header from "./Header"
import Card from "./Card";

import "../style/style.css"

const styles = {

    info: {

 padding: "0px"


    }

  }; 



function Container(props) {
    console.log(props.results)
   
    
    return (
    <div className="container text-center" style={styles.info}>
        
        <Header/>
        {props.results.map((result) => (
        <Card name={result.login}
              image={result.image}
              email={result.profileUrl}  
        
        />
        ))}
    </div>


    )
    };


export default Container;