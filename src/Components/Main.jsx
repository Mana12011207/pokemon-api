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
                </div>
                <div className="right-content">
                    <Pokemon />
                </div>
            </div>
        </>
    )
}

export default Main;