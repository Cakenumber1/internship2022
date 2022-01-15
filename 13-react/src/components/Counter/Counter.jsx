import { useState } from 'react';

function Counter() {
  let [counter, setCounter] = useState(0)
  return (
    <div className="Counter">
      <div>{counter}</div>
      <button onClick={() => setCounter(++counter)}>Increase</button>
      <button onClick={() => setCounter(--counter)}>Decrease</button>
    </div>
  );
}

export default Counter;