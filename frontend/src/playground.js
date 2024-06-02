import "./tailwind.css";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import BoldText from "./bold.js";
import {MathfieldElement} from 'mathlive'




function PlayGround() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const textArea = useRef(null);
  useEffect(()=> {textArea.current.focus()},[]);
 const textSelection =(e)=>
  {
    e.preventDefault();
    const textarea = textArea.current;
    const userInput= textArea.substring(textarea.selectionStart, (textarea.selectionEnd+1));
    setSelect(select = userInput);
   
  }   // select the text 

  const applyBold=()=>{
    const textarea = textArea.current;
    setInput(input=input.substring(0, textarea.selectionStart)+`<b>${select}</b>`+ input.substring(textarea.selectionEnd));
    setSelect("");
  }







  const handler = (e) => {
    setInput(e.target.value);
  }; // this is the update for user input
  return (
    <>
      <div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("User's raw input is: ", input);
          }}
        >
          <label>START COMPUTE!</label> <br />
          <textarea
            id="userInputArea"
            placeholder="Enter your expression here!"
            rows="20"
            cols="90"
            ref={textArea}
            value={input}
            onChange={handler}
            onMouseDown={textSelection}
            currentValue={select}
            onBold={BoldText}
            required
          />
          <br />
          <input type="submit" value="submit" />
          <BoldText toBeBold={applyBold}/>
        </form>
      </div>
    </>
  );
}

export default PlayGround;
