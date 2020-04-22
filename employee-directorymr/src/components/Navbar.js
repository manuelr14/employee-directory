import React from "react";
import "../style/style.css";

const styles = {
    nav: {
        background: "rgb(9,51,94)",
        padding: "3px",
        height:"97px"
 
    },
    info: {
        color: " rgb (255,255,255)",
        fontsize: "24px"

    },


  }; 

function Navbar() {
    return (
        <div className="jumbotron border-danger" id="jumbotron-red" style={styles.nav}>
            <p className="text-center" style={styles.info}>Employee Directory</p>
            <p className="text-center" style={styles.info}>Click on carrots to filter by headings or use the search box</p>
        </div>
    )
};

export default Navbar;
