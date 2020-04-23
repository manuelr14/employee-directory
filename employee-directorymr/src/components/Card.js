import React from "react";
import "../style/style.css";

const styles = {
    row: {
        fontSize: "25px",
        height: "65px"
    },
    info: {

        fontSize: "15px",
        margin: " 17px 0px 0px 0px",

    },
    link: {

        fontSize: "15px",
        target: " blank",
    }

};


function Card(props) {
     console.log(props.result)
    return (

        <ul className="list-group">
            {/* {props.results.map((result) => ( */}

                <div className="row" id="grey-back" style={styles.row}>
                    <div className="col text-left d-table-row float-left"><img className="img-fluid justify-content-center align-items-center align-content-center align-self-center" data-toggle="tooltip" data-bs-tooltip="" width="60px" height="60px" src={props.image} alt="profile"></img></div>
                    <div className="col text-left d-table-row float-left">
                        <h1 className="text-left" style={styles.info}>{props.name}</h1>
                    </div>
                    <div className="col text-left d-table-row float-left">
                            <h1 className="text-left" style={styles.info}>result.image</h1>
                    </div>
                    <div className="col text-left d-table-row float-left"><a className="text-center" href="#" style={styles.link}>{props.email}</a></div>
                    <div className="col text-left float-left">
                        <h1 className="text-left" style={styles.info}>{props.email}</h1>
                    </div>
                </div>


            {/* ))} */}
        </ul>



    )
};

export default Card;