import './tailwind.css';
import './App.css';
import createObject from '../src/interface.js';

function App() {

  return (
    <>
     <div>
        <button name="number" onClick={createObject("primariesMath")}>
 
           {/* an icon of empty block and will appear it inside the textfield */}
           </button>
    </div>
    </>
   
  );
}

export default App;
