import "./tailwind.css";
import "mathlive";
import { useState, useEffect, useRef } from "react";
import { ComputeEngine } from "https://unpkg.com/@cortex-js/compute-engine?module";
import { MathfieldElement } from "mathlive";
import Button from "@mui/material/Button/index.js";

function PlayGround() {
  const ce = new ComputeEngine();

  const [input, setInput] = useState("");
  const [parsedInput, setParsedInput] = useState(null);

  const mathfield = useRef(null);
  const valueHandler = (e) => {
    setInput(e.target.value);
    try {
      setParsedInput(ce.parse(e.target.value).json);
    } catch (e) {
      console.log("error with ", e);
      setParsedInput(null);
    }
  };

  useEffect(() => {
    if (MathfieldElement.keybindings && Array.isArray(MathfieldElement.keybindings)) {
      MathfieldElement.keybindings = [
        ...MathfieldElement.keybindings,
        {
          key: "Ctrl Cmd G", // Correctly specify the key combination
          ifMode: "math",
          command: ({ mathfield }) => mathfield.switchMode("text"), // Use a function to execute the command
        },
        {
          key: "Ctrl Cmd G",
          ifMode: "text",
          command: ({ mathfield }) => mathfield.switchMode("math"), // Use a function to execute the command
        },
      ];
    }
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
    <div className="space-y-3">
      <label id="Question">Your Question: </label>
      <br />
      <math-field ref={mathfield} math-virtual-policy="auto" placeholder="Your expression here"></math-field>
      {/* <p>value :{JSON.stringify(parsedInput)}</p> */}
      <br />
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default PlayGround;
