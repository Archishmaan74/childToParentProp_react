import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [childCount, setChildCount] = useState(0);

  const receiveCount = (countFromChild) => {
    setChildCount(countFromChild);
  };
  return (
    <>
      <h2>Parent Component</h2>
      <p>Count from Child: {childCount}</p>
      <Child sendCount={receiveCount} />
    </>
  );
}

export default Parent;
