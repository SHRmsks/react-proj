import "./tailwind.css";
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import BoldText from "./bold.js";
import { MathfieldElement } from "mathlive";

function PlayGround() {
  const [input, setInput] = useState(<p>""</p>);
  const [select, setSelect] = useState(<p>""</p>);
const text_Area = useRef(null);



  const handler = (e) => {
    setInput(e.target.value);
    return(setSelect(""));
  }; // this is the update for user input

  

  useEffect(() => {
    text_Area.current.focus();
  }, [input, select]);

   
  const textSelection = (e) => {
    e.preventDefault();
    const textarea = text_Area.current;
    var userInput = textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd + 1
    );
    setSelect((prevselect)=>(userInput));
  }; // select the text
  const applyBold = () => {
    const textarea = text_Area.current;
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    setInput(
      (previnput)=>(
        previnput.substring(0, start) +
        `<b>${select}</b>` +
        previnput.substring(end)
      )
    );
    setSelect("");
  };

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
          <div
            contentEditable="true"
            id="userInputArea"
            placeholder="Enter your expression here!"
            rows="20"
            cols="90"
            ref={text_Area}
            value={input}
            onChange={handler}
            onMouseUp={textSelection}
            currentValue={select}
            onBold={BoldText}
            required
          />
          <br />
          <input type="submit" value="submit" />
          <BoldText toBeBold={applyBold} />
        </form>
      </div>
    </>
  );
}

export default PlayGround;
