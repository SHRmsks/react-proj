import "./tailwind.css";
import React from 'react';

function BoldText(props){

    return (
        <>
        <div>
            <button onClick={props.toBeBold}>Bold</button>
        </div>
        </>
    )
}
export default BoldText;