import React from "react";
import "../style/style.css";

const styles = {
    row: {
        fontsize: "25px",
    },
    info: {

        fontsize: "20px",
        padding: " 5px 0px 0px 0px",

    },


  }; 

function Header(){

    return(

        <div className="row" id="container" style={styles.row}>
        <div className="col text-left d-table-row float-left">
            <h1 className="text-left" style={styles.info}>Image</h1>
        </div>
        <div className="col text-left d-table-row float-left">
            <h1 className="text-left" style={styles.info}>Name</h1>
        </div>
        <div className="col text-left d-table-row float-left">
            <h1 className="text-left" style={styles.info}>Phone</h1>
        </div>
        <div className="col text-left d-table-row float-left">
            <h1 className="text-left" style={styles.info}>Email</h1>
        </div>
        <div className="col text-left float-left">
            <h1 className="text-left" style={styles.info}>DOB</h1>
        </div>
    </div>
    )
};

export default Header;