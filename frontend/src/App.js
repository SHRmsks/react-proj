import "./tailwind.css";
import "./App.css";
import { createBlockcontent, ifValid, createObject } from "./interface.js";

function App() {
  return (
    <>
      <div>
        <button name="number" onClick={createBlockcontent(props.value)}>
          click me
          {/* an icon of empty block and will appear it inside the textfield */}
        </button>
      </div>
    </>
  );
}

export default App;


async function createBlock() {
  const [block, setBlock] = useState([]);
  const blockhandler = (e) => {
    setBlock(e.target.val); // this is the update for tracing block contents. as an obj
  };

  let contents = document.createElement (
    <>
      <div>
       <math-field oninput={block}></>
      </div>
    </>
  );
}