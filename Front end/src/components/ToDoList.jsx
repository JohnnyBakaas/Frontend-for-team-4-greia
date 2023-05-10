import { useState } from "react";
import ToDoITems from "./TODOItems";
import ToDoAddItem from "./ToDoAddItem";

const ToDoList = ({ setCurentPage, api }) => {
  const [items, setItems] = useState(0);

  const logOut = () => {
    localStorage.clear();
    setCurentPage("LogIn");
  };

  return (
    <>
      <button onClick={logOut}>Logg ut</button>

      <ToDoAddItem setItems={setItems} items={items} api={api} />

      <ToDoITems setItems={setItems} items={items} api={api} />
    </>
  );
};

export default ToDoList;
