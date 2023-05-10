import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import LogIn from "./components/LogIn";
import ToDoList from "./components/ToDoList";
import api from "./api/service.js";

function App() {
  const [curentPage, setCurentPage] = useState("Loading");

  useEffect(() => {
    const checkUser = async () => {
      try {
        const respnse = await api.get(
          `/getUser?userName=${localStorage.getItem("TeamProsjektUserName")}`
        );
        console.log(respnse.data);
        if (respnse.data !== null) setCurentPage("ToDoList");
        else setCurentPage("LogIn");
      } catch (err) {
        console.log(err);
      }
    };

    checkUser();
  }, []);

  switch (curentPage) {
    case "Loading":
      return <Loading />;
    case "LogIn":
      return <LogIn setCurentPage={setCurentPage} api={api} />;
    case "ToDoList":
      return <ToDoList setCurentPage={setCurentPage} api={api} />;
  }
}

export default App;
