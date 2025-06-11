import { useState } from "react";

function Child({ sendCount }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    sendCount(newCount);
  };
  return (
    <>
      <div className="card">
        <button onClick={handleClick}>Child count: {count}</button>
      </div>
    </>
  );
}

export default Child;
