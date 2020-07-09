import React ,{useState} from 'react';
import './App.css';

function App() {

  const [count,setCount]=useState(0);

  const handleDecrement=()=>{
    setCount(count-1);
  }

  const handleIncrement=()=>{
    setCount(count+1);
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
