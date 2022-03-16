// Code Keypad Component Here
import React from "react";

function Keypad(){
    function change(){
        console.log("Entering password...");
    }
    return (<input type="password" onChange={change}></input>)
}

export default Keypad;