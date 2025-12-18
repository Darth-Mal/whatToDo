import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [numbering, setNumbering] = useState(1);

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    // Logic to add todo item

    const newItem = {
      id: numbering,
      text: inputValue,
      status: undone,
    };

    setNumbering(numbering++);
    setTodoItem([...todoItem, newItem]);
    setInputValue("");

    console.log(todoItem);
  };

  return (
    <>
      <h1>Todo List</h1>

      <div className="listOfItems">
        <ul>
          {todoItem.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      <div className="todoInput">
        <input
          type="text"
          name="todo"
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  );
}

export default App;
