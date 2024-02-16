import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        title="Ingrese su nombre"
        type="text"
        className="form-control"
      />
      <button onClick={onClick} className="btn btn-primary mt-2">
        set Focus{" "}
      </button>
    </>
  );
};

export default FocusScreen;
