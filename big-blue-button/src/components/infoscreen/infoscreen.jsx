import React, { Component } from "react";

function Infoscreen() {
    function HaalTijden(){
        return(
            <div className="timesStyle">
                <h3>Start</h3>
                <h3>eind</h3>
                <h3>(eind - start)</h3>
            </div>
        )
    }
    return(
        <div >
            <HaalTijden/>
        </div>
    )
}
export default Infoscreen;
