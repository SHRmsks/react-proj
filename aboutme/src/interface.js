import classes from "./object.js";

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


var object = createObject("sigma",1,5, (x)=> (x) );
console.log(object.getSum());