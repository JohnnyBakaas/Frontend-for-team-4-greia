import { useEffect, useState } from "react";

const LogIn = ({ setCurentPage, api }) => {
  const [name, setName] = useState("");
  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = async () => {
      try {
        const respnse = await api.get(`/getUser?userName=${name}`);
        const data = respnse.data;
        localStorage.setItem("TeamProsjektUserName", data.name);
        localStorage.setItem("TeamProsjektUserId", data.id);
        setCurentPage("ToDoList");
      } catch (err) {
        console.log(err);
      }
    };

    checkUser();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={handleSetName}
          required
        />
        <button type="submit">Logg inn</button>
      </form>
    </>
  );
};

export default LogIn;
