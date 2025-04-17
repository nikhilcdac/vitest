// Counter.jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">Increment</button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement-btn">Decrement</button>
    </div>
  );
};

export default Counter;
