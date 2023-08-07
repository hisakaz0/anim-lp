import './App.css';
import { motion } from "framer-motion";
import { Input } from "./components/Input"
import { useState } from 'react';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="App">
      <main>
        <h3>sample motion div</h3>
        <div className='motion-div-ex'>
          <div>
            <motion.div
              className='box'
              animate={{ x, y, rotate }}
              transition={{ type: "spring" }}
            />
          </div>
          <div className='inputs'>
            <Input value={x} set={setX} max={200} min={-200}>x</Input>
            <Input value={y} set={setY} max={200} min={-200}>y</Input>
            <Input value={rotate} set={setRotate} max={180} min={-180}>rotate</Input>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
