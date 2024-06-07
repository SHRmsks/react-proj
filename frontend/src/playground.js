import "./tailwind.css";
import "mathlive";
import { useState, useEffect, useRef } from "react";
import {ComputeEngine} from 'https://unpkg.com/@cortex-js/compute-engine?module';

function PlayGround() {
  const ce= new ComputeEngine();

  const [input, setInput] = useState("");
  const [parsedInput, setParsedInput] = useState(null);


  const mathfield = useRef(null);
  const valueHandler = (e) => {setInput(e.target.value);
    try{
      setParsedInput(ce.parse(e.target.value).json);
    }catch(e){
      console.log("error with ", e);
      setParsedInput(null);
    }




  };
  useEffect(() => {
    mathfield.current.focus();
    if (mathfield.current) {
      mathfield.current.addEventListener("input", valueHandler);
    }
    return () => {
      if (mathfield.current) {
        mathfield.current.removeEventListener("input", valueHandler);
      }
    };
  }, [input, parsedInput]);

  return (
    <>
      <div>
        <label id="Question">Your Question: </label>
        <br/>
          <math-field ref={mathfield} math-virtual-policy="auto" placeholder="Your expression here"></math-field>
          <p>value :{ JSON.stringify(parsedInput)}</p>
      </div>
    </>
  );
}

export default PlayGround;
