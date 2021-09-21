import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button id="decrement-btn" onClick={subtract}>
        -
      </button>
      <span id="count-display">{count}</span>
      <button id="increment-btn" onClick={add}>
        +
      </button>
    </div>
  );
}

export default Counter;
