import React, { useState } from "react";

function TodoList() {
  const [toggle, setToggle] = useState(false);
  const [task, setTask] = useState("");
  const [agetask, setagetask] = useState("");
  const [TodoList, setTodoList] = useState([]);

  const handlechange = (e) => {
    setTask(e.target.value);
    // setagetask(e.target.value);
  };
  const handlechangeAGE = (e) => {
    setagetask(e.target.value);
  };
  const handleclick = () => {
    setTodoList([...TodoList, task, agetask]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="type somethings..."
        value={task}
        onChange={handlechange}
      />
      <input
        type="text"
        placeholder="type age"
        value={agetask}
        onChange={handlechangeAGE}
      />
      <button onClick={handleclick}>Add Task</button>
      {TodoList.map((elem) => {
        return <h1>{elem}</h1>;
      })}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Dark" : "light"}
      </button>
    </div>
  );
}

export default TodoList;
