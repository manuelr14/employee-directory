import React from "react";
import "../style/style.css";

function Navbar() {
    return (
        <div className="jumbotron border-danger" id="jumbotron-red" style="background-color: rgb(9,51,94);padding: 3px;height: 97px;">
            <p className="text-center" style="height: 0px;color: rgb(255,255,255);font-size: 24px;">Employee Directory</p>
            <p className="text-center" style="height: 0px;color: rgb(255,255,255);padding: 24px;">Click on carrots to filter by headings or use the search box</p>
        </div>
    )
};

export default Navbar;
