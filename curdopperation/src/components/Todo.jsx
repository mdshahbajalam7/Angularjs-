import React, { useState } from "react";

function Todo() {
  const [text, settext] = useState("");
  const [todo, setTodo] = useState([]);
  const handleclick = () => {
    const newItem = {
      title: text,
      status: false,
    };
    setTodo([...todo, newItem]);
    settext("");
  };
  console.log(todo);
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Todo"
        onChange={(e) => settext(e.target.value)}
      />
      <button onClick={handleclick}>Add</button>
      <ul>
        {todo.map((elem) => (
          <li>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
