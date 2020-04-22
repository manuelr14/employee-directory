import React from "react";
import "../style/style.css";

const styles = {
    div: {
      padding: "0px 0px 0px 0px ",
    
    },
    searchbar: {

        margin: "0px 0px 34px 0px"
      }

  };



function Searchbar() {

    return (
        <div className="row" style={styles.div}>

            <div className="col">
                <input type="search" placeholder="Search" style={styles.searchbar}></input>

            </div>
        </div>

    )

};


export default Searchbar;