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
    
    const employees = props.results.filter(employee => employee.login == props.search);
    // Set this.state.friends equal to the new friends array
    console.log(props.search)
    console.log(employees)
    console.log(employees.length)

    if (employees.length != 0  ){
        return (
            <div className="container text-center" style={styles.info}>
                
                <Header/>
                {employees.map((result) => (
                <Card name={result.login}
                      image={result.image}
                      email={result.profileUrl}  
                
                />
                ))}
            </div>
        
        
            )
            

    } else {
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
            

    }
   
    
}


export default Container;