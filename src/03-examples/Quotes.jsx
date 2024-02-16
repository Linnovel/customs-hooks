import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

const Quotes = ({ author, quote }) => {
  const peRef = useRef();

  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = peRef.current.getBoundingClientRect();

    setboxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={peRef} className="mb-1">
          {" "}
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

export default Quotes;
