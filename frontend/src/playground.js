import "./tailwind.css";
import { useState, useEffect, useRef } from "react";
import { createBlockcontent } from "./interface.js";
async function createBlock() {
  const [block, setBlock] = useState([]);
  const blockhandler = (e) => {
    setBlock(e.target.val); // this is the update for tracing block contents. as an obj
  };

  let contents = (
    <>
      <div>
        <textarea rows="1" value={block} onChange={blockhandler} required />
      </div>
    </>
  );
}

function PlayGround() {
  const [input, setInput] = useState("");

  const valuer = useRef(null);
  useEffect(() => {
    valuer.current.focus();
  }, []);

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
            ref={valuer}
            value={input}
            onChange={handler}
            required
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default PlayGround;
