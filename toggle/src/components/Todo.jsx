import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Todo() {
  const inputref = useRef();
  const [text, settext] = useState("");
  const [age, setage] = useState("");
  const [todo, setTodo] = useState([]);
  const handleclick = () => {
    const newItem = {
      title: text,
      age: age,
      status: false,
    };
    setTodo([...todo, newItem]);
    settext("");
    setage("");
  };
  useEffect(() => {
    inputref.current.focus();
  });
  console.log(todo);
  return (
    <div>
      <input
        style={{ border: "2px solid", borderRadius: "5px" }}
        value={text}
        placeholder="Todo"
        ref={inputref}
        onChange={(e) => settext(e.target.value)}
      />
      <input
        value={age}
        ref={inputref}
        onChange={(e) => setage(e.target.value)}
      />
      <button onClick={handleclick}>Add</button>
      <ul>
        {todo.map((elem) => (
          <>
            <li>{elem.title}</li>
            <li>{elem.age}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
