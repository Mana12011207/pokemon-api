import React from "react";
import Card from "./Card";
import Pokemon from "./Pokemon";

const Main =()=> {
    return(
        <>
            <div className="container">
                <div className="left-content">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <div className="btn-group">
                    <button>Previous</button>
                    <button>Next</button>

                </div>
                </div>
                <div className="right-content">
                    <Pokemon />
                </div>
            </div>
        </>
    )
}

export default Main;