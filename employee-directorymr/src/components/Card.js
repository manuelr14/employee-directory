import React from "react";
import "../style/style.css";

const styles = {
    row: {
        fontsize: "25px",
        height: "65px"
    },
    info: {

        fontsize: "15px",
        margin: " 17px 0px 0px 0px",

    },
    link: {

        fontsize: "15px",
        target: " blank",
      }

  }; 


function Card() {

    return (
        <div className="row" id="grey-back" style={styles.row}>
            <div className="col text-left d-table-row float-left"><img className="img-fluid justify-content-center align-items-center align-content-center align-self-center" data-toggle="tooltip" data-bs-tooltip="" width="60px" height="60px" src="" alt="profile"></img></div>
            <div className="col text-left d-table-row float-left">
                <h1 className="text-left" style={styles.info}>Name</h1>
            </div>
            <div className="col text-left d-table-row float-left">
                <h1 className="text-left" style={styles.info}>Phone</h1>
            </div>
            <div className="col text-left d-table-row float-left"><a className="text-center" href="#" style={styles.link}>Link</a></div>
            <div className="col text-left float-left">
                <h1 className="text-left" style={styles.info}>DOB</h1>
            </div>
        </div>


    )
};

export default Card;