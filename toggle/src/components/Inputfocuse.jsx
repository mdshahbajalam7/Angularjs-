import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Inputfocuse() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" ref={inputRef} />
    </div>
  );
}

export default Inputfocuse;
