import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

// const heavyStuff = (iterationNumber = 100) => {
//   for (let i = 0; i < iterationNumber; i++) {
//     console.log("ahi vamos");
//   }

//   return `${iterationNumber} iteraciones realizadas`;
// };

const MemorizeHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary"
      >
        show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemorizeHook;
