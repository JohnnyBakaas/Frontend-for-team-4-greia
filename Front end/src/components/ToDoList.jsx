import { useState } from "react";
import ToDoITems from "./TODOItems";
import ToDoAddItem from "./ToDoAddItem";

const ToDoList = ({ setCurentPage, api }) => {
  const [itemChanges, setItemChanges] = useState(0);

  const logOut = () => {
    localStorage.setItem("ToDoList", "");
    localStorage.setItem("TeamProsjektUserId", "");
    setCurentPage("LogIn");
  };

  return (
    <>
      <button onClick={logOut}>Logg ut</button>

      <ToDoAddItem
        setItemChanges={setItemChanges}
        itemChanges={itemChanges}
        api={api}
      />

      <ToDoITems
        setItemChanges={setItemChanges}
        itemChanges={itemChanges}
        api={api}
      />
    </>
  );
};

export default ToDoList;
