import classes from "./object.js";
import React from "react";
import ReactDOM from "react-dom";
function ifValid (className){
    return classes.hasOwnProperty(className);
}

function createObject ( className, ...parameters){
    if (ifValid(className)){
        return new (classes[className])(...parameters);
    }
    else{
        throw new Error(`Class ${className} is not supported`);
    }
}
// var object = createObject("sigma",1,5, (x)=> (x) );
// console.log(object.getSum());

function createBlockcontent( input ){
        try {
             const block = document.createElement(createObject(rawMath, input));
             const textarea = document.getElementById("userInputArea");
             textarea.appendChild(block.getvalue());
        }catch(error){
            console.error(error);
        }
       
}

export default {createBlockcontent, ifValid, createObject };



