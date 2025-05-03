import React, { useState } from "react";
import "./styles/App.css";

const App = () => {
  const [listTodo, setListTodo] = useState(null);
  const [newTodo, setNewToDo] = useState("");

  const onSubmit = () => {
    if (newTodo.trim() === "") return;
    setListTodo([...listTodo, newTodo]);
    setNewToDo("");
  };

  const deleteTodo = (index) => {
    const newList = [...listTodo];
    newList.splice(index, 1);
    setListTodo(newList);
  };

  const editTodo = (index) => {
    const newText = prompt("Nhập giá trị mới", listTodo[index]);
    if (newText.trim() === "") return;
    const newList = [...listTodo];
    newList[index] = newText;
    setListTodo(newList);
  };

  return (
    <>
      <div>
        <h1 className="title">Todo list</h1>
      </div>
      <div className="input-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      </div>
      <div className="btn-to-do">
        <button onClick={() => onSubmit()}>Add to do</button>
      </div>
      <div className="list-to-do">
        <ul>
          {listTodo.map((item, index) => {
            return (
              <>
                <li key={index}>
                  {item}
                  <button onClick={() => editTodo(index)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
