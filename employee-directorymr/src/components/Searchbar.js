import React from "react";
import "../style/style.css";

const styles = {
    div: {
      padding: "15px 0px 0px 0px ",
    
    },
    searchdiv: {

      padding: "20px 0px 0px 0px"
    },
    searchbar: {

        margin: "0px 0px 0px 34px"
      }

  };



function Searchbar() {

    return (
        <div className="row" style={styles.div}>

            <div className="col" style={styles.searchdiv}>
                <input type="search" placeholder="Search" style={styles.searchbar}></input>

            </div>
        </div>

    )

};


export default Searchbar;